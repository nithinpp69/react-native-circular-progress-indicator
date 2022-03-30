import React from 'react';
export interface CircularProgressBaseProps {
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
}
declare const CircularProgressBase: React.FC<CircularProgressBaseProps>;
export default CircularProgressBase;
//# sourceMappingURL=index.d.ts.map