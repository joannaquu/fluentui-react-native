import * as React from 'react';
import { MENU_BUTTON_TESTPAGE } from './consts';
import { Test, TestSection } from '../Test';
import { StandardMenuButton } from './StandardMenuButtonTest';
import { NestedMenuButton } from './NestedMenuButtonTest';
import { CustomizedMenuButton } from './CustomizedMenuButtonTest';
import { E2ETestMenuButton } from './MenuButtonE2ETest';

const menuButtonSections: TestSection[] = [
  {
    name: 'Standard MenuButton',
    testID: MENU_BUTTON_TESTPAGE,
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
    name: 'MenuButton for E2E Testing',
    component: E2ETestMenuButton,
  },
];

export const MenuButtonTest: React.FunctionComponent = () => {
  const description =
    'MenuButton is a component which contains ContextualMenu and Button components. This control combines and simplifies the API for customers.\nClicking on MenuButton opens ContextualMenu. It can have Submenu. But selection checks and a beak are not implemented.';

  return <Test name="MenuButton" description={description} sections={menuButtonSections} />;
};
