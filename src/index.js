import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, TextInput, Animated } from 'react-native';
import PropTypes from 'prop-types';
import Svg, { G, Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const CircularProgress = (props) => {
  const {
    value,
    radius,
    strokeWidth,
    duration,
    color,
    delay,
    textColor,
    fontSize,
    maxValue,
    outerCircleOpacity,
    strokeLinecap
  } = props;

  const styleProps = {
    radius,
    textColor,
    color,
    fontSize
  };

  const animatedValue = useRef(new Animated.Value(0)).current;
  const circleRef = useRef();
  const inputRef = useRef();

  const halfCircle = radius + strokeWidth;
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
        const maxPerc = (100 * v.value) / maxValue;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPerc) / 100;
        circleRef?.current?.setNativeProps({
          strokeDashoffset,
        });
      }
      if (inputRef?.current) {
        inputRef?.current?.setNativeProps({
          text: `${Math.round(v?.value)}`,
        });
      }
    });
    return () => animatedValue.removeAllListeners();
  }, [maxValue, value]);

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation={'-90'} origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill={'transparent'}
            strokeOpacity={outerCircleOpacity}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill={'transparent'}
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap={strokeLinecap}
          />
        </G>
      </Svg>
      <AnimatedInput
        ref={inputRef}
        underlineColorAndroid={'transparent'}
        editable={false}
        defaultValue={'0'}
        style={[
          StyleSheet.absoluteFillObject,
          dynamicStyles(styleProps).input
        ]}
      />
    </View>
  );
};

export const dynamicStyles = (props) => {
  return StyleSheet.create({
    input: {
      fontSize: props.fontSize ?? props.radius / 2,
      color: props.textColor ?? props.color,
      fontWeight: '900',
      textAlign: 'center'
    }
  });
};

CircularProgress.propTypes = {
  value: PropTypes.number.isRequired,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
  duration: PropTypes.number,
  color: PropTypes.string,
  delay: PropTypes.number,
  textColor: PropTypes.string,
  maxValue: PropTypes.number,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  outerCircleOpacity: PropTypes.number,
  strokeLinecap: PropTypes.oneOf(['butt', 'round', 'sqaure'])
};

CircularProgress.defaultProps = {
  value: 0,
  radius: 60,
  strokeWidth: 10,
  duration: 500,
  color: '#e74c3c',
  delay: 0,
  maxValue: 100,
  outerCircleOpacity: 0.2,
  strokeLinecap: 'round'
};

export default CircularProgress;