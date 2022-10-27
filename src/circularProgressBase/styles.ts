import { StyleSheet } from 'react-native';

type StyleProp = {
  radius: number;
  rotation: number;
};

const styles = (props: StyleProp) =>
  StyleSheet.create({
    container: {
      width: props.radius * 2,
      height: props.radius * 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    valueContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rotatingContainer: {
      transform: [{ rotate: `${props.rotation}deg` }],
    },
  });

export default styles;
