/** @jsxRuntime classic */
/** @jsx withSlots */
import { useRef, useEffect, useMemo, useCallback } from 'react';
import type { ScaleXTransform, TranslateXTransform } from 'react-native';
import { Animated, I18nManager } from 'react-native';

import type { UseSlots } from '@fluentui-react-native/framework';
import { compose, mergeProps, withSlots, buildUseStyling } from '@fluentui-react-native/framework';
import assertNever from 'assert-never';
import { Circle, ClipPath, Defs, LinearGradient, Rect, Stop, Svg, G } from 'react-native-svg';

import { stylingSettings } from './Shimmer.styling';
import type { ShimmerProps, ShimmerType } from './Shimmer.types';
import { shimmerName } from './Shimmer.types';

const useStyling = buildUseStyling(stylingSettings);
export const Shimmer = compose<ShimmerType>({
  displayName: shimmerName,
  ...stylingSettings,
  slots: {
    root: Svg,
  },
  useRender: (props: ShimmerProps, useSlots: UseSlots<ShimmerType>) => {
    const Slots = useSlots(props);
    props = mergeProps(props, Slots.root({}).props);
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
    const tokens = useStyling(props).root;
    const memoizedShimmerData = useMemo(
      () => ({
        angle: props.angle ? props.angle : tokens['angle'],
        containerWidth: props?.style?.['width'] ? props?.style['width'] : '100%',
        containerHeight: props?.style?.['height'] ? props?.style['height'] : '100%',
        delay: props.delay ? props.delay : tokens['delay'],
        duration: props.duration ? props.duration : tokens['duration'],
        easing: props.easing ? props.easing : undefined,
        shimmerColor: props.shimmerColor ? props.shimmerColor : tokens['shimmerColor'],
        shimmerColorOpacity: tokens['shimmerColorOpacity'],
        shimmerWaveColor: props.shimmerWaveColor ? props.shimmerWaveColor : tokens['shimmerWaveColor'],
        shimmerWaveColorOpacity: tokens['shimmerWaveColorOpacity'],
        x1Start: props.x1Start ? props.x1Start : -2,
        x1End: props.x1End ? props.x1End : 3,
        x2Start: props.x2Start ? props.x2Start : -1,
        x2End: props.x2End ? props.x2End : -1,
      }),
      [
        props.angle,
        props.delay,
        props.duration,
        props.easing,
        props.shimmerColor,
        props.shimmerColorOpacity,
        props.shimmerWaveColor,
        props.shimmerWaveColorOpacity,
        props.style,
        props.x1Start,
        props.x1End,
        props.x2Start,
        props.x2End,
      ],
    );

    const x1 = useRef(new Animated.Value(memoizedShimmerData.x1Start)).current;
    const x2 = useRef(new Animated.Value(memoizedShimmerData.x2Start)).current;
    const shimmerAnimation = useCallback(() => {
      Animated.loop(
        Animated.parallel([
          Animated.timing(x1, {
            toValue: memoizedShimmerData.x1End,
            duration: memoizedShimmerData.duration,
            useNativeDriver: true,
            easing: memoizedShimmerData.easing,
          }),
          Animated.timing(x2, {
            toValue: memoizedShimmerData.x2End,
            duration: memoizedShimmerData.duration,
            useNativeDriver: true,
            easing: memoizedShimmerData.easing,
          }),
        ]),
      ).start();
    }, [memoizedShimmerData.delay,
        memoizedShimmerData.duration,
        memoizedShimmerData.easing,
        memoizedShimmerData.x1Start,
        memoizedShimmerData.x2Start,
        memoizedShimmerData.x1End,
        memoizedShimmerData.x2End]);

    useEffect(() => {
      shimmerAnimation();
    });

    return (rest: ShimmerProps) => {
      const { elements, ...mergedProps } = mergeProps(props, rest);
      const rows = [];

      if (elements) {
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          if (element.type == 'rect') {
            rows.push(
              <Rect
                key={i}
                width={element.width}
                height={element.height}
                x={element.x}
                y={element.y}
                rx={element.borderRadiusX}
                ry={element.borderRadiusY}
              />,
            );
          } else if (element.type == 'circle') {
            rows.push(<Circle key={i} r={element.radius} cx={element.cx} cy={element.cy} />);
          } else {
            assertNever(element);
          }
        }
      }

      // Flip the SVG if we are running in RTL
      const rtlTransfrom: TranslateXTransform & ScaleXTransform = I18nManager.isRTL
        ? { translateX: memoizedShimmerData.containerWidth, scaleX: -1 }
        : { translateX: undefined, scaleX: undefined };

      return (
        <Slots.root {...mergedProps}>
          <Defs>
            <AnimatedLinearGradient id="gradient" x1={x1} x2={x2} gradientTransform={`rotate(${memoizedShimmerData.angle})`}>
              <Stop offset="10%" stopColor={memoizedShimmerData.shimmerColor} stopOpacity={memoizedShimmerData.shimmerColorOpacity} />
              <Stop
                offset="20%"
                stopColor={memoizedShimmerData.shimmerWaveColor}
                stopOpacity={memoizedShimmerData.shimmerWaveColorOpacity}
              />
              <Stop offset="30%" stopColor={memoizedShimmerData.shimmerColor} stopOpacity={memoizedShimmerData.shimmerColorOpacity} />
            </AnimatedLinearGradient>
            <ClipPath id="shimmerView">{rows}</ClipPath>
          </Defs>
          <G transformProps={rtlTransfrom}>
            <Rect
              x="0"
              y="0"
              width={memoizedShimmerData.containerWidth}
              height={memoizedShimmerData.containerHeight}
              fill="url(#gradient)"
              clipPath="url(#shimmerView)"
            />
          </G>
        </Slots.root>
      );
    };
  },
});
