import * as React from 'react';
import { Test, TestSection } from '../Test';
import { SHADOW_TESTPAGE } from './consts';
import { ShadowDepthTestSection } from './ShadowDepthTestSection';
import { ShadowButtonTestSection } from './ShadowButtonTestSection';

const shadowSections: TestSection[] = [
  {
    name: 'Shadow Depth Ramp',
    testID: SHADOW_TESTPAGE,
    component: ShadowDepthTestSection,
  },
  {
    name: 'Shadows on Button Examples',
    testID: SHADOW_TESTPAGE,
    component: ShadowButtonTestSection,
  },
];

export const ShadowTest: React.FunctionComponent = () => {
  const description = 'A Shadow component using the Fluent Design System. Shadow components can be added to other components.';

  return <Test name="Shadow Test" description={description} sections={shadowSections} />;
};
