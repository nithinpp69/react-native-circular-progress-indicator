import React, { useEffect, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Svg, { G, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  withDelay,
  runOnJS,
  useDerivedValue,
  Easing,
} from 'react-native-reanimated';
import COLORS from '../utils/colors';
import styles from './styles';
import {CircularProgressProps} from './types';

const AnimatedInput = Animated.createAnimatedComponent(TextInput);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress: React.FC<CircularProgressProps> = ({
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
  title = '',
  titleStyle = {},
  titleColor,
  titleFontSize,
  progressValueColor,
  progressValueStyle = {},
  fontSize,
  valuePrefix = '',
  valueSuffix = '',
  showProgressValue = true,
  subtitle = '',
  subtitleStyle = {},
  subtitleColor,
  subtitleFontSize,
  progressFormatter = (v: number) => {
    'worklet';

    return Math.round(v);
  },
}: CircularProgressProps) => {
  const animatedValue = useSharedValue(initialValue);
  const viewBox = radius + Math.max(activeStrokeWidth, inActiveStrokeWidth);
  const circleCircumference = 2 * Math.PI * radius;

  const styleProps = useMemo(
    () => ({
      radius,
      rotation,
      progressValueColor,
      fontSize,
      progressValueStyle,
      activeStrokeColor,
      titleStyle,
      titleColor,
      titleFontSize,
      showProgressValue,
      subtitleColor,
      subtitleFontSize,
      subtitleStyle,
    }),
    [
      radius,
      rotation,
      progressValueColor,
      fontSize,
      progressValueStyle,
      activeStrokeColor,
      titleStyle,
      titleColor,
      titleFontSize,
      showProgressValue,
      subtitleColor,
      subtitleFontSize,
      subtitleStyle,
    ]
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

  const progressValue = useDerivedValue(() => {
    return `${valuePrefix}${progressFormatter(
      animatedValue.value
    )}${valueSuffix}`;
  });

  const animatedTextProps = useAnimatedProps(() => {
    return {
      text: progressValue.value,
    } as any;
  });

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
        {showProgressValue && (
          <AnimatedInput
            underlineColorAndroid="transparent"
            editable={false}
            defaultValue={`${valuePrefix}${initialValue}${valueSuffix}`}
            style={[
              styles(styleProps).input,
              progressValueStyle,
              styles(styleProps).fromProps,
            ]}
            animatedProps={animatedTextProps}
          />
        )}
        {title && title !== '' ? (
          <Text
            style={[styles(styleProps).title, titleStyle]}
            numberOfLines={1}
          >
            {title}
          </Text>
        ) : null}
        {subtitle && subtitle !== '' ? (
          <Text
            style={[
              styles(styleProps).title,
              styles(styleProps).subtitle,
              subtitleStyle,
            ]}
            numberOfLines={1}
          >
            {subtitle}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default CircularProgress;
