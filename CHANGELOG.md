###  Build: 🏠 `4.4.0` - react-native-circular-progress-indicator

---
- feat: add imperative methods to play, pause, and reAnimate
###  Build: 🏠 `4.3.0` - react-native-circular-progress-indicator

---
- feat: change stroke color based on animation value
###  Build: 🏠 `4.2.1` - react-native-circular-progress-indicator

---
- fix prefix and suffix style on android

###  Build: 🏠 `4.2.0` - react-native-circular-progress-indicator

---
- make prefix and suffix separate text components
- add separate styles for prefix and suffix value

###  Build: 🏠 `4.1.1` - react-native-circular-progress-indicator

---
- fix: make dashed circle fill color transparent
###  Build: 🏠 `4.1.0` - react-native-circular-progress-indicator

---
- feat: added dashed circle configuration.
- chore: added build setup with react-native-builder-bob.

###  Build: 🏠 `4.0.0` - react-native-circular-progress-indicator

---
- Fixed extra padding issue from the `CircularProgress` component. 
- Added `allowFontScaling` prop to the `CircularProgress` component. Pass `false` to disable font scaling.
###  Build: 🏠 `3.2.1` - react-native-circular-progress-indicator

---
- Bug fixes and improvements.
###  Build: 🏠 `3.2.0` - react-native-circular-progress-indicator

---
- Added web support.
- Now you can use the component in web too.

###  Build: 🏠 `3.1.0` - react-native-circular-progress-indicator

---
- Updated internal working of the module.
- Refactored the code to several standalone components.
- Moved all the animation logic to a custom hook `useAnimatedValue`

###  Build: 🏠 `3.0.1` - react-native-circular-progress-indicator

---
- Updated typos in the readme. Renamed props are now updated in the readme as well.

###  Build: 🏠 `3.0.0` - react-native-circular-progress-indicator

---
- add types to styles
- refactor styles and colors
- add linear easing to the animation. This will look better when used as a countdown timer.
- add new progress formatter function. By default it will round the progress value to the nearest integer. You can also pass a function to format the progress value.
  This function has to be a worklet function.
- replace `CircularProgressWithChild` with `CircularProgressBase` component.  `CircularProgressWithChild` 
  component will be eventually removed from the package in favor of `CircularProgressBase`. Eventually, all the
  progress logic will be moved into the `CircularProgressBase`. The CircularProgressWithChild component is still available
  in the package but will be removed in the next releases Please use the new CircularProgressBase component instead.
