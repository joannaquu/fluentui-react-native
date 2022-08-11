import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Separator } from '@fluentui/react-native';
import { Stack } from '@fluentui-react-native/stack';
import { stackStyle } from './Common/styles';
import { Checkbox } from '@fluentui-react-native/experimental-checkbox';
import { tests } from '../testPages';

export type TestSection = {
  name: string;
  testID?: string;
  component: React.FunctionComponent;
};

export interface TestProps {
  name: string;
  description: string;
  sections: TestSection[];
}

const styles = StyleSheet.create({
  name: {
    marginTop: 4,
  },
  description: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  section: {
    marginTop: 12,
  },
  statusView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  statusHeader: {
    marginBottom: 6,
  },
  statusLabel: {
    marginTop: 2,
    marginStart: 4,
  },
  status: {
    fontWeight: 'normal',
  },
});

const PlatformCheckbox = Checkbox.customize({
  disabled: {
    checkboxBorderColor: 'black',
    checkmarkColor: 'blue',
    color: 'black',
  },
});

export const Test = (props: TestProps): React.ReactElement<Record<string, never>> => {
  const platforms = tests.find((test) => test.name === props.name).platforms;

  return (
    <View testID="ScrollViewAreaForComponents">
      <Text style={[styles.name]} variant="heroSemibold">
        {props.name}
      </Text>
      <Separator />
      <Stack style={stackStyle}>
        <Text style={styles.description}>{props.description}</Text>
      </Stack>
      <Text style={[styles.section]} variant="headerSemibold">
        Platforms
      </Text>
      <Separator />
      {platforms.map((platform) => {
        return <PlatformCheckbox label={platform} defaultChecked={true} disabled={true} size="large" key={platform} />;
      })}
      {props.sections.map((section, index) => {
        const TestComponent = section.component;
        return (
          <View key={index}>
            <Text style={[styles.section]} variant="headerSemibold" testID={section.testID}>
              {section.name}
            </Text>
            <Separator />
            <TestComponent />
          </View>
        );
      })}
    </View>
  );
};
