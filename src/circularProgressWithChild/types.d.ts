import React from 'react';
export interface CircularProgressWithChildProps {
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
     * inactive progress circle stroke width
     */
    children?: React.ReactNode;
    /**
     * change direction of progress ring
     */
    clockwise?: boolean;
}
declare const CircularProgressWithChild: React.FC<CircularProgressWithChildProps>;
export declare const styles: {
    valueContainer: {
        flex: number;
        alignItems: "center";
        justifyContent: "center";
    };
};
export default CircularProgressWithChild;
//# sourceMappingURL=index.d.ts.map