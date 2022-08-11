import * as React from 'react';
import { StandardUsage } from './StandardUsage';
import { CustomizeUsage } from './CustomizeUsage';
import { PERSONACOIN_TESTPAGE } from './consts';
import { Test, TestSection } from '../Test';

const personaCoinSections: TestSection[] = [
  {
    name: 'Standard Usage',
    testID: PERSONACOIN_TESTPAGE,
    component: StandardUsage,
  },
  {
    name: 'Customize Usage',
    component: CustomizeUsage,
  },
];

export const PersonaCoinTest: React.FunctionComponent = () => {
  const description = "PersonaCoins are used for rendering an individual's avatar. PersonaCoin renders the circular image component.";

  return <Test name="PersonaCoin" description={description} sections={personaCoinSections} />;
};
