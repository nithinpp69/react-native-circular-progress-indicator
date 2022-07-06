import React, { useMemo, useRef } from 'react';
import { TextInput, Platform } from 'react-native';
import Animated, { useAnimatedReaction } from 'react-native-reanimated';
import COLORS from '../../utils/colors';
import styles from './styles';
import type { ProgressValueProps } from '../../types';

Animated.addWhitelistedNativeProps({ text: true });
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const ProgressValue: React.FC<ProgressValueProps> = ({
  initialValue = 0,
  radius = 60,
  activeStrokeColor = COLORS.GREEN,
  progressValueColor,
  progressValueStyle = {},
  progressValueFontSize,
  progressValue,
  animatedTextProps,
  allowFontScaling = true,
}: ProgressValueProps) => {

  const inputRef = useRef<any>(null);

  if (Platform.OS === 'web') {
    // only run the reaction on web platform.
    useAnimatedReaction(
      () => {
        return progressValue.value;
      },
      (data, prevData) => {
        if (data !== prevData && inputRef.current) {
          inputRef.current.value = data;
        }
      }
    );
  }

  const styleProps = useMemo(
    () => ({
      radius,
      progressValueColor,
      progressValueFontSize,
      progressValueStyle,
      activeStrokeColor,
    }),
    [
      radius,
      progressValueColor,
      progressValueFontSize,
      progressValueStyle,
      activeStrokeColor,
    ]
  );

  return (
    <AnimatedInput
      ref={inputRef}
      underlineColorAndroid={COLORS.TRANSPARENT}
      editable={false}
      defaultValue={`${initialValue}`}
      style={[
        styles(styleProps).input,
        progressValueStyle,
        styles(styleProps).fromProps,
      ]}
      animatedProps={animatedTextProps}
      allowFontScaling={allowFontScaling}
    />
  );
};

export default ProgressValue;
