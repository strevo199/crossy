import { VariantProps} from '@shopify/restyle';
import React, {Children} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Theme} from '../../theme';
import {PaletteType} from '../../theme/palette';
import {Box} from '../layouts';
import {RestyleTextProps, Text} from '../Typography';

export type PrimaryButtonProps = RestyleTextProps & {
  disabled?: boolean;
  onPress?: TouchableOpacityProps["onPress"];
  touchableOpacityProps?: TouchableOpacityProps;
  size?: keyof Theme["buttonSizes"]
}

export const PrimaryButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      disabled={disabled}
      onPress={onPress}
      {...touchableOpacityProps}>
      <Text>{Children}</Text>
    </TouchableOpacity>
  );
};
