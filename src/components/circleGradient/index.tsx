import React from 'react';
import { Defs, LinearGradient, Stop } from 'react-native-svg';

import type { CircleGradientProps } from '../../types';

const CircleGradient: React.FC<CircleGradientProps> = ({
  activeStrokeSecondaryColor,
  activeStrokeColor,
}: CircleGradientProps) => {
  if (activeStrokeSecondaryColor) {
    return (
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor={activeStrokeSecondaryColor} />
          <Stop offset="100%" stopColor={activeStrokeColor} />
        </LinearGradient>
      </Defs>
    );
  }
  return null;
};

export default React.memo(CircleGradient);
