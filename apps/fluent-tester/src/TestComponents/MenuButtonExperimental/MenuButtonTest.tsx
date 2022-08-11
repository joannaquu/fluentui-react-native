import * as React from 'react';
import { MENU_BUTTON_EXPERIMENTAL_TESTPAGE } from './consts';
import { Test, TestSection } from '../Test';
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
  const description =
    'MenuButton is a component which contains ContextualMenu and Button components. This control combines and simplifies the API for customers.\nClicking on MenuButton opens ContextualMenu. It can have Submenu. But selection checks and a beak are not implemented.';

  return <Test name="MenuButton (Experimental)" description={description} sections={menuButtonSections} />;
};
