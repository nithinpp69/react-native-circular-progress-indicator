import React, { useMemo } from 'react';
import Svg, { G, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import Animated from 'react-native-reanimated';
import COLORS from '../../utils/colors';
import { ProgressCircleProps } from './types';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  circleBackgroundColor = COLORS.TRANSPARENT,
  radius = 60,
  strokeLinecap = 'round',
  activeStrokeColor = COLORS.GREEN,
  activeStrokeSecondaryColor = null,
  activeStrokeWidth = 10,
  inActiveStrokeColor = COLORS.BLACK_30,
  inActiveStrokeWidth = 10,
  inActiveStrokeOpacity = 1,
  animatedCircleProps,
}: ProgressCircleProps) => {
  const viewBox = useMemo(
    () => radius + Math.max(activeStrokeWidth, inActiveStrokeWidth),
    [radius, activeStrokeWidth, inActiveStrokeWidth],
  );
  const circleCircumference = useMemo(() => 2 * Math.PI * radius, [radius]);

  return (
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
          stroke={activeStrokeSecondaryColor ? 'url(#grad)' : activeStrokeColor}
          strokeWidth={activeStrokeWidth}
          r={radius}
          fill="transparent"
          strokeDasharray={circleCircumference}
          strokeLinecap={strokeLinecap}
          animatedProps={animatedCircleProps}
        />
      </G>
    </Svg>
  );
};

export default ProgressCircle;
