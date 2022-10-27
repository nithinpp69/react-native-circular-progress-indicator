import React, { useMemo } from 'react';
import { Circle, Defs, Mask } from 'react-native-svg';

import COLORS from '../../utils/colors';
import type { DashedCircleProps } from '../../types';

const DashedCircle: React.FC<DashedCircleProps> = ({
  dashedStrokeConfig = { count: 0, width: 0 },
  circleCircumference,
  inActiveStrokeWidth,
  activeStrokeWidth,
  inactiveCircleRadius,
  activeCircleRadius,
}: DashedCircleProps) => {
  const strokeDashArray = useMemo(() => {
    const totalDashSpace = dashedStrokeConfig.width * dashedStrokeConfig.count;
    const dashGap =
      (circleCircumference - totalDashSpace) / dashedStrokeConfig.count;
    return `${dashedStrokeConfig.width} ${dashGap}`;
  }, [circleCircumference, dashedStrokeConfig]);

  const strokeWidth = useMemo(
    () => Math.max(inActiveStrokeWidth, activeStrokeWidth),
    [inActiveStrokeWidth, activeStrokeWidth]
  );
  const radius = useMemo(
    () => Math.max(inactiveCircleRadius, activeCircleRadius),
    [inactiveCircleRadius, activeCircleRadius]
  );

  if (dashedStrokeConfig?.count > 0 && dashedStrokeConfig?.width > 0) {
    return (
      <Defs>
        <Mask id="dashed-circle">
          <Circle
            cx="50%"
            cy="50%"
            stroke={COLORS.WHITE}
            fill={COLORS.TRANSPARENT}
            strokeWidth={strokeWidth}
            r={radius}
            strokeOpacity={1}
            strokeDasharray={strokeDashArray}
          />
        </Mask>
      </Defs>
    );
  }
  return null;
};

export default React.memo(DashedCircle);
