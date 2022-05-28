import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const DismissKeyboardView: React.FC<{style?: StyleProp<ViewStyle>}> = ({
  children,
  ...props
}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

// behavior="position" 은 안드로이드에서 잘 적용되고 ios는 padding이 잘 적용된다.

export default DismissKeyboardView;

// children 이 있으면 React.FC 없으면 function component 를 사용하는게 좋다.
//ViewStyle << 이거는 View 안에 있는 스타일을 적용한다는 뜻 ex) TextStyle 등등 의 경우 같이 사용
