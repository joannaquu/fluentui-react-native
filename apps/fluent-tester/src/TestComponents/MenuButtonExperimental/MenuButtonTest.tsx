import * as React from 'react';
import { MENU_BUTTON_EXPERIMENTAL_TESTPAGE } from './consts';
import { Test, TestSection, PlatformStatus } from '../Test';
import { StandardMenuButton } from './StandardMenuButtonTest';
import { NestedMenuButton } from './NestedMenuButtonTest';
import { E2ETestExperimentalMenuButton } from './ExperimentalMenuButtonE2ETest';
import { CustomizedMenuButton } from './CustomizedMenuButtonTest';

const menuButtonSections: TestSection[] = [
  {
    name: 'Standard MenuButton',
    testID: MENU_BUTTON_EXPERIMENTAL_TESTPAGE,
    component: StandardMenuButton,
  },
  {
    name: 'Nested MenuButton',
    component: NestedMenuButton,
  },
  {
    name: 'MenuButton with customized UI',
    component: CustomizedMenuButton,
  },
  {
    name: 'E2E Testing MenuButton',
    component: E2ETestExperimentalMenuButton,
  },
];

export const ExperimentalMenuButtonTest: React.FunctionComponent = () => {
  const status: PlatformStatus = {
    win32Status: 'Experimental',
    uwpStatus: 'Backlog',
    iosStatus: 'Backlog',
    macosStatus: 'Backlog',
    androidStatus: 'Backlog',
  };

  const description =
    'MenuButton is a component which contains ContextualMenu and Button components. This control combines and simplifies the API for customers.\nClicking on MenuButton opens ContextualMenu. It can have Submenu. But selection checks and a beak are not implemented.';

  const links = {
    Usage:
      'https://github.com/microsoft/fluentui-react-native/blob/main/apps/fluent-tester/src/TestComponents/MenuButtonExperimental/StandardMenuButtonTest.tsx',
  };

  return <Test name="Experimental MenuButton Test" description={description} links={links} sections={menuButtonSections} status={status} />;
};
