/// <reference types="react" />
export interface CircularProgressProps {
  /**
   * progress value
   */
  value: number;
  /**
   * initial progress value. Helpful when used as a countdown timer
   */
  initialValue?: number;
  /**
   * progress circle radius
   */
  radius?: number;
  /**
   * progress animation duration
   */
  duration?: number;
  /**
   * progress animation delay
   */
  delay?: number;
  /**
   * progress value text color
   */
  textColor?: string;
  /**
   * progress value text style
   */
  textStyle?: object;
  /**
   * progress maximum value. Percentage calculation is based on the maximum value provided
   */
  maxValue?: number;
  /**
   * progress value text font size
   */
  fontSize?: number | string;
  /**
   * progress stroke line cap
   */
  strokeLinecap?: 'butt' | 'round' | 'square';
  /**
   * callback when animation is completed.
   */
  onAnimationComplete?: () => void;
  /**
   * prefix value
   */
  valuePrefix?: string;
  /**
   * suffix value
   */
  valueSuffix?: string;
  /**
   * active progress circle color
   */
  activeStrokeColor?: string;
  /**
   * active progress secondary color. Use this to provide a gradient effect
   */
  activeStrokeSecondaryColor?: string;
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
  /**
   * show or hide the progress text value
   */
  showProgressValue?: boolean;
}
declare const CircularProgress: ({ value, initialValue, radius, duration, delay, textColor, textStyle, fontSize, maxValue, strokeLinecap, onAnimationComplete, valuePrefix, valueSuffix, activeStrokeColor, activeStrokeSecondaryColor, activeStrokeWidth, inActiveStrokeColor, inActiveStrokeWidth, inActiveStrokeOpacity, showProgressValue, }: {
  value: any;
  initialValue?: number | undefined;
  radius?: number | undefined;
  duration?: number | undefined;
  delay?: number | undefined;
  textColor: any;
  textStyle?: {} | undefined;
  fontSize: any;
  maxValue?: number | undefined;
  strokeLinecap?: string | undefined;
  onAnimationComplete?: (() => void) | undefined;
  valuePrefix?: string | undefined;
  valueSuffix?: string | undefined;
  activeStrokeColor?: string | undefined;
  activeStrokeSecondaryColor?: string | undefined;
  activeStrokeWidth?: number | undefined;
  inActiveStrokeColor?: string | undefined;
  inActiveStrokeWidth?: number | undefined;
  inActiveStrokeOpacity?: number | undefined;
  showProgressValue?: boolean | undefined;
}) => JSX.Element;
export declare const dynamicStyles: (props: any) => {
  fromProps: {
    fontSize: any;
    color: any;
  };
  input: {
    fontWeight: "bold";
    textAlign: "center";
  };
};
export default CircularProgress;
//# sourceMappingURL=index.d.ts.map