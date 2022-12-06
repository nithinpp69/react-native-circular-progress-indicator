import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import ProgressCircle from '../components/progressCircle';
import useAnimatedValue from '../hooks/useAnimatedValue';
import COLORS from '../utils/colors';
import type { CircularProgressBaseProps, ProgressRef } from '../types';

import styles from './styles';

const CircularProgressBase = forwardRef<ProgressRef, CircularProgressBaseProps>(
  (props, ref) => {
    const {
      value,
      initialValue = 0,
      circleBackgroundColor = COLORS.TRANSPARENT,
      radius = 60,
      duration = 500,
      delay = 0,
      maxValue = 100,
      strokeLinecap = 'round',
      onAnimationComplete = () => null,
      activeStrokeColor = COLORS.GREEN,
      activeStrokeSecondaryColor = null,
      activeStrokeWidth = 10,
      inActiveStrokeColor = COLORS.BLACK_30,
      inActiveStrokeWidth = 10,
      inActiveStrokeOpacity = 1,
      clockwise = true,
      startInPausedState = false,
      rotation = 0,
      dashedStrokeConfig = { count: 0, width: 0 },
      strokeColorConfig = undefined,
      children,
    } = props;

    const { animatedCircleProps, play, pause, reAnimate } = useAnimatedValue({
      initialValue,
      radius,
      maxValue,
      clockwise,
      startInPausedState,
      delay,
      value,
      duration,
      onAnimationComplete,
      activeStrokeWidth,
      inActiveStrokeWidth,
      strokeColorConfig,
    });

    useImperativeHandle(ref, () => ({
      play,
      pause,
      reAnimate,
    }));

    const styleProps = useMemo(
      () => ({
        radius,
        rotation,
      }),
      [radius, rotation]
    );

    return (
      <View style={styles(styleProps).container} testID="progress-bar">
        <View style={styles(styleProps).rotatingContainer}>
          <ProgressCircle
            circleBackgroundColor={circleBackgroundColor}
            radius={radius}
            strokeLinecap={strokeLinecap}
            activeStrokeColor={activeStrokeColor}
            activeStrokeSecondaryColor={activeStrokeSecondaryColor}
            activeStrokeWidth={activeStrokeWidth}
            inActiveStrokeColor={inActiveStrokeColor}
            inActiveStrokeWidth={inActiveStrokeWidth}
            inActiveStrokeOpacity={inActiveStrokeOpacity}
            animatedCircleProps={animatedCircleProps}
            dashedStrokeConfig={dashedStrokeConfig}
          />
        </View>
        <View
          style={[
            StyleSheet.absoluteFillObject,
            styles(styleProps).valueContainer,
          ]}>
          {children}
        </View>
      </View>
    );
  }
);

export default CircularProgressBase;
