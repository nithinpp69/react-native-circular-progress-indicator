import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import ProgressCircle from '../components/progressCircle';
import useAnimatedValue from '../hooks/useAnimatedValue';
import COLORS from '../utils/colors';
import styles from './styles';
import { CircularProgressBaseProps } from './types';

const CircularProgressBase: React.FC<CircularProgressBaseProps> = ({
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
  rotation = 0,
  children,
}: CircularProgressBaseProps) => {
  const { animatedCircleProps } = useAnimatedValue({
    initialValue,
    radius,
    maxValue,
    clockwise,
    delay,
    value,
    duration,
    onAnimationComplete,
  });

  const styleProps = useMemo(
    () => ({
      radius,
      rotation,
    }),
    [radius, rotation]
  );

  return (
    <View style={styles(styleProps).container}>
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
        />
      </View>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          styles(styleProps).valueContainer,
        ]}
      >
        {children}
      </View>
    </View>
  );
};

export default CircularProgressBase;
