import { useCallback, useEffect, useMemo } from 'react';
import {
  Easing,
  interpolateColor,
  runOnJS,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { withPause } from 'react-native-redash';

import type { StrokeColorConfigType } from '../types';

import useCircleValues from './useCircleValues';

export interface UseAnimatedValueProps {
  value: number;
  initialValue?: number;
  radius?: number;
  duration?: number;
  delay?: number;
  maxValue?: number;
  onAnimationComplete?: () => void;
  activeStrokeWidth?: number;
  inActiveStrokeWidth?: number;
  clockwise?: boolean;
  valueSuffix?: string;
  valuePrefix?: string;
  // eslint-disable-next-line no-unused-vars
  progressFormatter?: (v: number) => number | string;
  strokeColorConfig?: StrokeColorConfigType[];
}

type Config = {
  strokeDashoffset: number;
  stroke?: string | number;
};

export default function useAnimatedValue({
  initialValue = 0,
  radius = 60,
  maxValue = 100,
  clockwise,
  delay = 0,
  value,
  duration,
  onAnimationComplete = () => null,
  activeStrokeWidth = 10,
  inActiveStrokeWidth = 10,
  progressFormatter = (v: number) => {
    'worklet';

    return Math.round(v);
  },
  strokeColorConfig = undefined,
}: UseAnimatedValueProps) {
  const paused = useSharedValue(<boolean>false);
  const animatedValue = useSharedValue(initialValue);
  const { circleCircumference } = useCircleValues({
    radius,
    activeStrokeWidth,
    inActiveStrokeWidth,
  // eslint-disable-next-line prettier/prettier
  });

  const pause = useCallback(() => {
    paused.value = true;
  }, [paused]);

  const play = useCallback(() => {
    paused.value = false;
  }, [paused]);

  const resetAnimatedValue = useCallback(() => {
    paused.value = false;
    animatedValue.value = initialValue;
  }, [animatedValue, initialValue, paused]);

  const animateValue = useCallback(() => {
    animatedValue.value = withPause(
      withDelay(
        delay,
        withTiming(value, { duration, easing: Easing.linear }, (isFinished) => {
          if (isFinished) {
            runOnJS(onAnimationComplete)?.();
          }
        })
      ),
      paused
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[animatedValue, delay, duration, paused, value]);

  const reAnimate = () => {
    resetAnimatedValue();
    animateValue();
  };

  const sortedStrokeColors = useMemo(() => {
    if (!strokeColorConfig) {
      return null;
    }
    return strokeColorConfig.sort((a, b) => a.value - b.value);
  }, [strokeColorConfig]);

  const colors = useMemo(() => {
    if (!sortedStrokeColors) {
      return null;
    }
    return sortedStrokeColors.map((item) => item.color);
  }, [sortedStrokeColors]);

  const values = useMemo(() => {
    if (!sortedStrokeColors) {
      return null;
    }
    return sortedStrokeColors.map((item) => item.value);
  }, [sortedStrokeColors]);

  const animatedCircleProps = useAnimatedProps(() => {
    let biggestValue: number = Math.max(initialValue, maxValue);
    biggestValue = biggestValue <= 0 ? 1 : biggestValue;
    const maxPercentage: number = clockwise
      ? (100 * animatedValue.value) / biggestValue
      : (100 * -animatedValue.value) / biggestValue;
    const config: Config = {
      strokeDashoffset:
        circleCircumference - (circleCircumference * maxPercentage) / 100,
    };
    const strokeColor =
      colors && values
        ? interpolateColor(animatedValue.value, values, colors)
        : undefined;
    if (strokeColor) {
      config.stroke = strokeColor;
    }
    return config;
  });

  useEffect(() => {
    animateValue();
  }, [animateValue]);

  const progressValue = useDerivedValue(() => {
    return `${progressFormatter(animatedValue.value)}`;
  });

  const animatedTextProps = useAnimatedProps(() => {
    return {
      text: progressValue.value,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;  
  });

  return {
    animatedCircleProps,
    animatedTextProps,
    progressValue,
    pause,
    play,
    reAnimate,
  };
}
