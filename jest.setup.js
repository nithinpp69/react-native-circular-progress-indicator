/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line max-len
  const mocks = jest.requireActual(
    './node_modules/react-native-reanimated/mock'
  );
  return {
    ...mocks,
    defineAnimation: () => {},
  };
});
