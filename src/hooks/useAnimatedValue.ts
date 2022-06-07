import { useEffect } from 'react';
import {
  Easing,
  runOnJS,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
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
  progressFormatter?: (v: number) => number | string;
}

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
}: UseAnimatedValueProps) {
  const animatedValue = useSharedValue(initialValue);
  const { circleCircumference } = useCircleValues({
    radius,
    activeStrokeWidth,
    inActiveStrokeWidth,
  });

  const animatedCircleProps = useAnimatedProps(() => {
    let biggestValue: number = Math.max(initialValue, maxValue);
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
    return `${progressFormatter(animatedValue.value)}`;
  });

  const animatedTextProps = useAnimatedProps(() => {
    return {
      text: progressValue.value,
    } as any;
  });

  return {
    animatedCircleProps,
    animatedTextProps,
    progressValue,
  };
}
