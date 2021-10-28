import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
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
     * title to display below the progress value
     */
    title: string | undefined;
    /**
     * title text style
     */
    titleStyle: StyleProp<TextStyle>;
    /**
     * title text color
     */
    titleColor: string | undefined;
    /**
     * title text font size
     */
    titleFontSize: number | undefined;
    /**
     * progress circle background color
     */
    circleBackgroundColor: string | undefined;
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
    textStyle?: StyleProp<TextStyle>;
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
    /**
     * change direction of progress ring
     */
    clockwise?: boolean;
    /**
     * subtitle text value
     */
    subtitle?: StyleProp<TextStyle>;
    /**
     * subtitle text style
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * subtitle text color
     */
    subtitleColor?: string,
    /**
     * subtitle text font size
     */
    subtitleFontSize?: number,
}
declare const CircularProgress: React.FC<CircularProgressProps>;
export declare const dynamicStyles: (props: any) => {
    fromProps: {
        fontSize: any;
        color: any;
    };
    input: {
        fontWeight: "bold";
        textAlign: "center";
    };
    valueContainer: {
        flex: number;
        alignItems: "center";
        justifyContent: "center";
    };
    title: {
        textAlign: "center";
        width: string;
        marginTop: number;
        color: any;
        fontSize: any;
    };
    subtitle: {
        color: any;
        fontSize: any;
    };
};
export default CircularProgress;
//# sourceMappingURL=index.d.ts.map