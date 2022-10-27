import type React from 'react';
import type { TextInputProps, TextStyle } from 'react-native';
import type { AnimateProps } from 'react-native-reanimated';
import type Animated from 'react-native-reanimated';
import type { CircleProps } from 'react-native-svg';

type StrokeLineCapType = 'butt' | 'round' | 'square';

type DashedStrokeConfigType = {
  /**
   * The total number of dashes to draw.
   */
  count: number;
  /**
   * The width of each dash.
   */
  width: number;
};

type CircleGradientProps = {
  /**
   * active progress circle color. Use this to change the
   * color of the progress ring.
   *
   * @default '#2ecc71'
   */
  activeStrokeColor?: string;
  /**
   * active progress secondary color. Use this to provide a
   * gradient effect. The circle will be drawn with gradient
   * activeStrokeColor and activeStrokeSecondaryColor.
   *
   * @default null
   */
  activeStrokeSecondaryColor?: string | null;
};

interface DashedCircleProps {
  circleCircumference: number;
  inActiveStrokeWidth: number;
  activeStrokeWidth: number;
  inactiveCircleRadius: number;
  activeCircleRadius: number;
  dashedStrokeConfig?: DashedStrokeConfigType;
}

type StrokeColorConfigType = {
  value: number;
  color: string;
};

interface BaseProgressCircleProps extends CircleGradientProps {
  /**
   * progress circle background color. Use this to
   * change the background color of the progress circle.
   *
   * @default 'transparent'
   */
  circleBackgroundColor?: string;
  /**
   * progress circle radius. This is useful if you want
   * to adjust the size of the progress circle.
   *
   * @default 60
   */
  radius?: number;
  /**
   * progress stroke line cap.
   */
  strokeLinecap?: StrokeLineCapType;
  /**
   * inactive progress circle color. Use this to change
   * the color of inactive circle.
   *
   * @default 'rgba(0,0,0,0.3)'
   */
  inActiveStrokeColor?: string;
  /**
   * inactive progress circle opacity value. This is useful if
   * you want to change the opacity of the inactive circle.
   *
   * @default 1
   */
  inActiveStrokeOpacity?: number;
  /**
   * active progress circle stroke width. Use this to change the
   * stroke width of the active progress circle.
   *
   * @default 10
   */
  activeStrokeWidth?: number;
  /**
   * inactive progress circle stroke width. Use this to change the
   * stroke width of the inactive progress circle.
   *
   * @default 10
   */
  inActiveStrokeWidth?: number;
  /**
   * This is useful if you want to display the progress circle as dashed lines.
   * The dashed stroke count and stroke width can be customized.
   * Based on these values and the radius of the circle,
   * the dash gap between each dashes will be calculated automatically.
   */
  dashedStrokeConfig?: DashedStrokeConfigType;
  /**
   * This is useful if you want to animate the progress circle stroke color
   * based on the animation value. The stroke color config accepts an array
   * of color & value object. You can define a specific color for a
   * specific value and the component will animate the color based on the
   * current animated value.
   * It is important to note that when this is used, the strokeColorConfig
   * will take precedence over the activeStrokeColor and the
   * activeStrokeSecondaryColor props.
   */
  strokeColorConfig?: StrokeColorConfigType[];
}

interface ProgressCircleProps extends BaseProgressCircleProps {
  animatedCircleProps: AnimateProps<CircleProps>;
}

interface BaseCircularProgressProps extends BaseProgressCircleProps {
  /**
   * progress percentage of the circle. Any change in
   * this value will trigger the animation.
   */
  value: number;
  /**
   * initial progress value. This is useful if you want to
   * use the progress circle as a countdown timer. This will
   * set the initial value of the animation value and will gradually
   * animate to the value of the value prop.
   *
   * @default 0
   */
  initialValue?: number;
  /**
   * progress animation duration. Use this to control the
   * duration of the progress animation.
   *
   * @default 500
   */
  duration?: number;
  /**
   * progress animation delay. Use this to provide a delay
   * to the progress animation. The animation will start after
   * the delay. Accepts a number in milliseconds.
   *
   * @default 0
   */
  delay?: number;
  /**
   * progress maximum value. The percentage calculation is
   * based on the maximum value provided.
   *
   * @default 100
   */
  maxValue?: number;
  /**
   * callback when animation is completed. This is useful if
   * you want to trigger an action after the animation is completed.
   */
  onAnimationComplete?: () => void;
  /**
   * change direction of progress ring. By default the progress
   * ring will be drawn clockwise. If you want to draw the progress
   * ring counter clockwise, set this to false.
   *
   * @default true
   */
  clockwise?: boolean;
  /**
   * Use this to render the progress circle initially without any animation.
   * This will by default pause the progress animation and the progress will
   * be kept at zero.
   * The component can be animated again by calling the `reAnimate` or `play`
   * function.
   *
   * @default false
   */
  startInPausedState?: boolean;
  /**
   * rotate the progress ring by this value. Accepts a number from -360 to 360.
   *
   * @default 0
   */
  rotation?: number;
}

interface CircularProgressBaseProps extends BaseCircularProgressProps {
  /**
   * custom child component for circular progress. This is
   * useful if you want to add a custom component to be
   * displayed inside the circular progress bar.
   */
  children?: React.ReactNode;
}

interface CircularProgressProps extends BaseCircularProgressProps {
  /**
   * title to display below the progress value. This
   * is useful if you want to display a title below the
   * progress value.
   *
   * @default ''
   */
  title?: string;
  /**
   * title text style. Use this props to customize the
   * title text style.
   *
   * @default {}
   */
  titleStyle?: TextStyle;
  /**
   * title text color. Use this to change the color of the
   * title text. If not provided, the active stroke color or
   * the color from title style will be used.
   *
   * @default null
   */
  titleColor?: string;
  /**
   * title text font size. Use this to change the font size
   * of the title text. If not provided, the font size from title
   * style  or a value calculated from the circle radius will be used.
   */
  titleFontSize?: number;
  /**
   * progress value text color. Use this to change the color of
   * the progress value text. If not provided, the active stroke color
   * or the color from progress value style style will be used.
   */
  progressValueColor?: string;
  /**
   * progress value text style. Use this props to customize the
   * progress value text style.
   *
   * @default {}
   */
  progressValueStyle?: TextStyle;
  /**
   * progress value text font size. Use this to change the font size
   * of the progress value text. If not provided, the font size from
   * progress value style or a value calculated from the circle radius
   * will be used.
   */
  progressValueFontSize?: number;
  /**
   * prefix value. This is useful if you want to display a prefix
   * value before the progress value.
   *
   * @default ''
   */
  valuePrefix?: string;
  /**
   * suffix value. Use this to display a suffix value after the
   * progress value.
   *
   * @default ''
   */
  valueSuffix?: string;
  /**
   * show or hide the progress text value. This is useful if you
   * want to hide the progress value text.
   *
   * @default true
   */
  showProgressValue?: boolean;
  /**
   * subtitle text value. Use this to display a subtitle below
   * the progress value.
   *
   * @default ''
   */
  subtitle?: string;
  /**
   * subtitle text style. Use this props to customize the
   * subtitle text style.
   *
   * @default {}
   */
  subtitleStyle?: TextStyle;
  /**
   * subtitle text color. Use this to change the color of the
   * subtitle text. If not provided, the active stroke color or
   * the color from subtitle style or the active stroke color
   * will be used.
   */
  subtitleColor?: string;
  /**
   * subtitle text font size. Use this to change the font size
   * of the subtitle text. If not provided, the font size from
   * subtitle style or a value calculated from the circle radius
   * will be used.
   */
  subtitleFontSize?: number;
  /**
   * function to format the progress value.
   * By default, the value is rounded to the nearest integer.
   * Make sure to define it as a worklet function.
   * https://docs.swmansion.com/react-native-reanimated/docs/2.2.0/worklets/
   */
  // eslint-disable-next-line no-unused-vars
  progressFormatter?: (v: number) => number | string;
  /**
   * specifies whether fonts should scale to respect Text Size
   * accessibility settings. Pass false to disable automatic text
   * scaling.
   */
  allowFontScaling?: boolean;
  /**
   * custom styling to value prefix.
   * Use this to customize the styling of the value prefix.
   * If not provided, the progress value style/colors will be used.
   *
   * * @default {}
   */
  valuePrefixStyle?: TextStyle;
  /**
   * custom styling to value suffix.
   * Use this to customize the styling of the value suffix.
   * If not provided, the progress value style/colors will be used.
   *
   * * @default {}
   */
  valueSuffixStyle?: TextStyle;
}

type ProgressValueProps = {
  initialValue: number;
  radius?: number;
  activeStrokeColor?: string;
  progressValueColor?: string;
  progressValueStyle?: TextStyle;
  progressValueFontSize?: number;
  progressValue: Animated.SharedValue<string>;
  animatedTextProps: AnimateProps<TextInputProps>;
  allowFontScaling?: boolean;
};

type ProgressRef = {
  /**
   * Use this to play the animation once  the animation is paused.
   */
  play: () => void;
  /**
   * Use this to pause the animation.
   */
  pause: () => void;
  /**
   * Use this to replay the animation.
   */
  reAnimate: () => void;
};

export type {
  CircleGradientProps,
  ProgressCircleProps,
  CircularProgressBaseProps,
  CircularProgressProps,
  DashedCircleProps,
  DashedStrokeConfigType,
  ProgressValueProps,
  StrokeColorConfigType,
  ProgressRef,
};
