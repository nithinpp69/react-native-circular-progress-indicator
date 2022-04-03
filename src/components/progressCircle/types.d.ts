import React from 'react';
import { CircleProps } from 'react-native-svg';
export interface ProgressCircleProps {
  /**
   * progress circle background color
   */
  circleBackgroundColor?: string;
  /**
   * progress circle radius
   */
  radius?: number;
  /**
   * progress stroke line cap
   */
  strokeLinecap?: 'butt' | 'round' | 'square';
  /**
   * active progress circle color
   */
  activeStrokeColor?: string;
  /**
   * active progress secondary color. Use this to provide a gradient effect
   */
  activeStrokeSecondaryColor?: string | null;
  /**
   * inactive progress circle color
   */
  inActiveStrokeColor?: string;
  /**
   * inactive progress circle opacity value
   */
  inActiveStrokeOpacity?: number;
  /**
   * active progress circle stroke width
   */
  activeStrokeWidth?: number;
  /**
   * inactive progress circle stroke width
   */
  inActiveStrokeWidth?: number;
  animatedCircleProps: CircleProps;
}
declare const ProgressCircle: React.FC<ProgressCircleProps>;
export default ProgressCircle;
//# sourceMappingURL=index.d.ts.map
