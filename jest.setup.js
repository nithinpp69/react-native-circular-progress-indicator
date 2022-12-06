/* eslint-disable @typescript-eslint/no-empty-function */

jest.mock('react-native-reanimated', () => {
  const mocks = jest.requireActual(
    './node_modules/react-native-reanimated/mock'
  );
  return {
    ...mocks,
    defineAnimation: () => {},
    createAnimatedPropAdapter: () => {},
  };
});
