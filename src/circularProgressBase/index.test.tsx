import React from 'react';
import { render } from '@testing-library/react-native';

import CircularProgressBase from './index';

describe('render circular progress base', () => {
  it('should render progress with minimum items', () => {
    const { queryByTestId } = render(<CircularProgressBase value={50} />);
    expect(queryByTestId('progress-bar')).toBeDefined();
    expect(queryByTestId('progress-circle')).toBeDefined();
  });

  it('should call onAnimationComplete function', async () => {
    const onAnimationCompleted = jest.fn();
    render(
      <CircularProgressBase
        value={50}
        duration={1500}
        onAnimationComplete={onAnimationCompleted}
      />
    );
    expect(onAnimationCompleted).toHaveBeenCalledTimes(1);
  });
});
