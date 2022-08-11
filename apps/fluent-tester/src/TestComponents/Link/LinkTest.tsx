import * as React from 'react';
import { Alert } from 'react-native';
import { Link } from '@fluentui/react-native';
import { Stack } from '@fluentui-react-native/stack';
import { stackStyle } from '../Common/styles';
import { LINK_TESTPAGE } from './consts';
import { Test, TestSection } from '../Test';
import { LinkE2ETest } from './E2ELinkTest';

const Links: React.FunctionComponent = () => {
  const doPress = (): void => {
    Alert.alert('Alert.', 'You have been alerted.');
  };

  return (
    <Stack style={stackStyle}>
      <Link url="https://www.bing.com/" content="Click to navigate." />
      <Link onPress={doPress} content="Click to alert." />
    </Stack>
  );
};

const linkSections: TestSection[] = [
  {
    name: 'Navigation and Alert',
    testID: LINK_TESTPAGE,
    component: Links,
  },
  {
    name: 'Link E2E Test',
    component: LinkE2ETest,
  },
];

export const LinkTest: React.FunctionComponent = () => {
  const description =
    'With a Link, users can navigate to another page, window, or Help topic; display a definition; initiate a command; or choose an option. A Link indicates that it can be clicked, typically by being displayed using the visited or unvisited link system colors. Traditionally, Links are underlined as well, but that approach is often unnecessary and falling out of favor to reduce visual clutter.\n\nA Link is the lightest weight clickable control, and is often used to reduce the visual complexity of a design.';

  return <Test name="Link" description={description} sections={linkSections} />;
};
