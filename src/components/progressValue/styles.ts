import type { TextStyle } from 'react-native';
import { StyleSheet } from 'react-native';

type StyleProps = {
  radius: number;
  progressValueColor?: string;
  progressValueFontSize?: number;
  progressValueStyle?: TextStyle;
  activeStrokeColor?: string;
};

const styles = (props: StyleProps) => {
  return StyleSheet.create({
    fromProps: {
      fontSize:
        props.progressValueFontSize ||
        props.progressValueStyle?.fontSize ||
        props.radius / 2,
      color:
        props.progressValueColor ||
        props.progressValueStyle?.color ||
        props.activeStrokeColor,
    },
    input: {
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 0,
    },
  });
};

export default styles;
