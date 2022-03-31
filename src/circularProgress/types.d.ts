import React from 'react';
import { TextStyle } from 'react-native';
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
     * progress circle background color
     */
    circleBackgroundColor?: string;
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
     * progress maximum value. Percentage calculation is based on the maximum value provided
     */
    maxValue?: number;
    /**
     * progress stroke line cap
     */
    strokeLinecap?: 'butt' | 'round' | 'square';
    /**
     * callback when animation is completed.
     */
    onAnimationComplete?: () => void;
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
    /**
     * custom child component for circular progress
     */
    children?: React.ReactNode;
    /**
     * change direction of progress ring
     */
    clockwise?: boolean;
    /**
     * rotate the progress ring by this value
     * accepts a number from -360 to 360
     */
    rotation?: number;
    /**
     * title to display below the progress value
     */
    title?: string;
    /**
     * title text style
     */
    titleStyle?: TextStyle;
    /**
     * title text color
     */
    titleColor?: string;
    /**
     * title text font size
     */
    titleFontSize?: number;
    /**
     * progress value text color
     */
    progressValueColor?: string;
    /**
     * progress value text style
     */
    progressValueStyle?: TextStyle;
    /**
     * progress value text font size
     */
    fontSize?: number;
    /**
     * prefix value
     */
    valuePrefix?: string;
    /**
     * suffix value
     */
    valueSuffix?: string;
    /**
     * show or hide the progress text value
     */
    showProgressValue?: boolean;
    /**
     * subtitle text value
     */
    subtitle?: string;
    /**
     * subtitle text style
     */
    subtitleStyle?: TextStyle;
    /**
     * subtitle text color
     */
    subtitleColor?: string;
    /**
     * subtitle text font size
     */
    subtitleFontSize?: number;
    /**
     * function to format the progress value.
     * By default, the value is rounded to the nearest integer.
     * Make sure to define it as a worklet function.
     * https://docs.swmansion.com/react-native-reanimated/docs/2.2.0/worklets/
     */
    progressFormatter?: (v: number) => number;
}
declare const CircularProgress: React.FC<CircularProgressProps>;
export default CircularProgress;
//# sourceMappingURL=index.d.ts.map