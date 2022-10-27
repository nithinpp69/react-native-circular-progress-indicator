import { useCallback, useMemo } from 'react';

export interface UseCircleValuesProps {
  radius: number;
  activeStrokeWidth: number;
  inActiveStrokeWidth: number;
}

export default function useCircleValues({
  radius,
  activeStrokeWidth,
  inActiveStrokeWidth,
}: UseCircleValuesProps) {
  const isSameStrokeWidth = useMemo(
    () => activeStrokeWidth === inActiveStrokeWidth,
    [activeStrokeWidth, inActiveStrokeWidth]
  );

  const isActiveStrokeBigger = useMemo(() => {
    return activeStrokeWidth > inActiveStrokeWidth;
  }, [activeStrokeWidth, inActiveStrokeWidth]);

  const findRadius = useCallback(() => {
    if (isSameStrokeWidth) {
      return radius + inActiveStrokeWidth / 2;
    }
    if (isActiveStrokeBigger) {
      return radius + activeStrokeWidth / 2;
    }
    return radius + inActiveStrokeWidth / 2;
  }, [
    isSameStrokeWidth,
    isActiveStrokeBigger,
    radius,
    inActiveStrokeWidth,
    activeStrokeWidth,
  ]);

  const inactiveCircleRadius = useMemo(() => findRadius(), [findRadius]);

  const activeCircleRadius = useMemo(() => findRadius(), [findRadius]);

  const circleCircumference = useMemo(
    () => 2 * Math.PI * activeCircleRadius,
    [activeCircleRadius]
  );

  return {
    inactiveCircleRadius,
    activeCircleRadius,
    circleCircumference,
  };
}
