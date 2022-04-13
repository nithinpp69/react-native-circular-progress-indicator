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
