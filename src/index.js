import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Animated,
  Text,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
import Svg, { G, Circle, Defs, LinearGradient, Stop } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const CircularProgress = (props) => {
  const {
    value,
    initialValue,
    radius,
    duration,
    delay,
    textColor,
    textStyle,
    descriptionStyle,
    fontSize,
    maxValue,
    strokeLinecap,
    onAnimationComplete,
    valuePrefix,
    valueSuffix,
    description,
    activeStrokeColor,
    activeStrokeSecondaryColor,
    activeStrokeWidth,
    inActiveStrokeColor,
    inActiveStrokeWidth,
    inActiveStrokeOpacity,
    showProgressValue,
    textFormatFn,
  } = props;

  const styleProps = {
    radius,
    textColor,
    fontSize,
    textStyle,
    description,
    activeStrokeColor,
  };

  const animatedValue = useRef(new Animated.Value(initialValue)).current;
  const circleRef = useRef();
  const inputRef = useRef();

  const halfCircle = radius + Math.max(activeStrokeWidth, inActiveStrokeWidth);
  const circleCircumference = 2 * Math.PI * radius;
  const animation = (toValue) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(value);
    animatedValue.addListener((v) => {
      if (circleRef?.current) {
        let biggestValue = Math.max(initialValue, maxValue);
        biggestValue = biggestValue <= 0 ? 1 : biggestValue;
        const maxPerc = (100 * v.value) / biggestValue;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPerc) / 100;
        circleRef?.current?.setNativeProps({
          strokeDashoffset,
        });
      }
      if (inputRef?.current) {
        inputRef?.current?.setNativeProps({
          text: `${valuePrefix}${textFormatFn(v?.value)}${valueSuffix}`,
        });
      }
      if (value === v?.value) {
        onAnimationComplete();
      }
    });
    return () => animatedValue.removeAllListeners();
  }, [value]);

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        {activeStrokeSecondaryColor ? (
          <Defs>
            <LinearGradient id={"grad"} x1="0%" y1="0%" x2="0%" y2="100%">
              <Stop offset="0%" stopColor={activeStrokeSecondaryColor} />
              <Stop offset="100%" stopColor={activeStrokeColor} />
            </LinearGradient>
          </Defs>
        ) : null}

        <G rotation={"-90"} origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={inActiveStrokeColor}
            strokeWidth={inActiveStrokeWidth}
            r={radius}
            fill={"transparent"}
            strokeOpacity={inActiveStrokeOpacity}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={
              activeStrokeSecondaryColor ? `url(#grad)` : activeStrokeColor
            }
            strokeWidth={activeStrokeWidth}
            r={radius}
            fill={"transparent"}
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap={strokeLinecap}
          />
        </G>
      </Svg>
      {showProgressValue && (
        <AnimatedInput
          ref={inputRef}
          underlineColorAndroid={"transparent"}
          editable={false}
          defaultValue={`${valuePrefix}0${valueSuffix}`}
          style={[
            StyleSheet.absoluteFillObject,
            dynamicStyles(styleProps).input,
            textStyle,
            dynamicStyles(styleProps).fromProps,
          ]}
        />
      )}
      <Text
        style={[
          StyleSheet.absoluteFillObject,
          dynamicStyles(styleProps).description,
          descriptionStyle,
        ]}
      >
        {description}
      </Text>
    </View>
  );
};

export const dynamicStyles = (props) => {
  return StyleSheet.create({
    fromProps: {
      fontSize: props.fontSize || props.textStyle?.fontSize || props.radius / 2,
      color:
        props.textColor || props.textStyle?.color || props.activeStrokeColor,
      marginTop: props.description
        ? Dimensions.get("screen").height * -0.03
        : undefined,
    },
    input: {
      fontWeight: "bold",
      textAlign: "center",
    },
    description: {
      marginTop: Dimensions.get("screen").height * 0.13,
      fontSize: 14,
      color: "white",
      fontWeight: "500",
      textAlign: "center",
    },
  });
};

CircularProgress.propTypes = {
  value: PropTypes.number.isRequired,
  initialValue: PropTypes.number,
  radius: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
  textColor: PropTypes.string,
  textStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  maxValue: PropTypes.number,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeLinecap: PropTypes.oneOf(["butt", "round", "square"]),
  onAnimationComplete: PropTypes.func,
  valuePrefix: PropTypes.string,
  valueSuffix: PropTypes.string,
  description: PropTypes.string,
  activeStrokeColor: PropTypes.string,
  activeStrokeSecondaryColor: PropTypes.string,
  inActiveStrokeColor: PropTypes.string,
  inActiveStrokeOpacity: PropTypes.number,
  activeStrokeWidth: PropTypes.number,
  inActiveStrokeWidth: PropTypes.number,
  showProgressValue: PropTypes.bool,
  textFormatFn: PropTypes.func,
};

CircularProgress.defaultProps = {
  value: 0,
  initialValue: 0,
  radius: 60,
  duration: 500,
  delay: 0,
  maxValue: 100,
  strokeLinecap: "round",
  onAnimationComplete: () => {},
  valuePrefix: "",
  valueSuffix: "",
  description: "",
  textStyle: {},
  descriptionStyle: {},
  activeStrokeColor: "#2ecc71",
  activeStrokeSecondaryColor: "",
  inActiveStrokeColor: "rgba(0,0,0,0.3)",
  inActiveStrokeOpacity: 1,
  activeStrokeWidth: 10,
  inActiveStrokeWidth: 10,
  showProgressValue: true,
  textFormatFn: (v) => Math.round(v),
};

export default CircularProgress;
