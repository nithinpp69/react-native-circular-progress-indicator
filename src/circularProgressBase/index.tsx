import React, { useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { G, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  withDelay,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import styles from './styles';
import { CircularProgressBaseProps } from './types';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgressBase: React.FC<CircularProgressBaseProps> = ({
  value,
  initialValue = 0,
  circleBackgroundColor = 'transparent',
  radius = 60,
  duration = 500,
  delay = 0,
  maxValue = 100,
  strokeLinecap = 'round',
  onAnimationComplete = () => null,
  activeStrokeColor = '#2ecc71',
  activeStrokeSecondaryColor = null,
  activeStrokeWidth = 10,
  inActiveStrokeColor = 'rgba(0,0,0,0.3)',
  inActiveStrokeWidth = 10,
  inActiveStrokeOpacity = 1,
  clockwise = true,
  rotation = 0,
  children,
}: CircularProgressBaseProps) => {
  const animatedValue = useSharedValue(initialValue);
  const viewBox = radius + Math.max(activeStrokeWidth, inActiveStrokeWidth);
  const circleCircumference = 2 * Math.PI * radius;

  const styleProps = useMemo(
    () => ({
      radius,
      rotation,
    }),
    [radius, rotation]
  );

  const animatedCircleProps = useAnimatedProps(() => {
    let biggestValue = Math.max(initialValue, maxValue);
    biggestValue = biggestValue <= 0 ? 1 : biggestValue;
    const maxPercentage: number = clockwise
      ? (100 * animatedValue.value) / biggestValue
      : (100 * -animatedValue.value) / biggestValue;
    return {
      strokeDashoffset:
        circleCircumference - (circleCircumference * maxPercentage) / 100,
    };
  });

  useEffect(() => {
    animatedValue.value = withDelay(
      delay,
      withTiming(value, { duration, easing: Easing.linear }, (isFinished) => {
        if (isFinished) {
          runOnJS(onAnimationComplete)?.();
        }
      })
    );
  }, [value]);

  return (
    <View style={styles(styleProps).container}>
      <View style={styles(styleProps).rotatingContainer}>
        <Svg
          width={radius * 2}
          height={radius * 2}
          viewBox={`0 0 ${viewBox * 2} ${viewBox * 2}`}
        >
          {activeStrokeSecondaryColor ? (
            <Defs>
              <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor={activeStrokeSecondaryColor} />
                <Stop offset="100%" stopColor={activeStrokeColor} />
              </LinearGradient>
            </Defs>
          ) : null}
          <G rotation="270" origin={`${viewBox}, ${viewBox}`}>
            <Circle
              cx="50%"
              cy="50%"
              stroke={inActiveStrokeColor}
              strokeWidth={inActiveStrokeWidth}
              r={radius}
              fill={circleBackgroundColor}
              strokeOpacity={inActiveStrokeOpacity}
            />
            <AnimatedCircle
              cx="50%"
              cy="50%"
              stroke={
                activeStrokeSecondaryColor ? 'url(#grad)' : activeStrokeColor
              }
              strokeWidth={activeStrokeWidth}
              r={radius}
              fill="transparent"
              strokeDasharray={circleCircumference}
              animatedProps={animatedCircleProps}
              strokeLinecap={strokeLinecap}
            />
          </G>
        </Svg>
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
