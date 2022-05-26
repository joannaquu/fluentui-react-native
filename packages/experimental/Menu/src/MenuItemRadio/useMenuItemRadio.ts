import * as React from 'react';
import { InteractionEvent } from '@fluentui-react-native/interactive-hooks';
import { useMenuListContext } from '../context/menuListContext';
import { MenuItemCheckboxProps, MenuItemCheckboxState } from '../MenuItemCheckbox/MenuItemCheckbox.types';
import { useMenuCheckboxInteraction } from '../MenuItemCheckbox/useMenuItemCheckbox';

export const useMenuItemRadio = (props: MenuItemCheckboxProps): MenuItemCheckboxState => {
  const { name } = props;
  const context = useMenuListContext();
  const checked = context.checked?.[name];
  const selectRadio = context.selectRadio;

  const toggleChecked = React.useCallback(
    (e: InteractionEvent) => {
      selectRadio(e, name, !checked);
    },
    [checked, name, selectRadio],
  );

  return useMenuCheckboxInteraction(props, toggleChecked);
};