import React, {useCallback, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function SignIn() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);
  const onChangePassword = useCallback(text => {
    setPassword(text);
  }, []);
  const onSunmit = useCallback(() => {
    Alert.alert('가입완료');
  }, []);

  const canGoNext = email && password;
  return (
    <View>
      <View style={Styles.inputWrapper}>
        <Text style={Styles.label}>이메일</Text>
        <TextInput
          style={Styles.textInput}
          placeholder="이메일을 입력해주세요."
          onChangeText={onChangeEmail}
        />
      </View>
      <View style={Styles.inputWrapper}>
        <Text style={Styles.label}>비밀번호</Text>
        <TextInput
          style={Styles.textInput}
          placeholder="비밀번호를 입력해주세요."
          onChangeText={onChangePassword}
        />
      </View>
      <View style={Styles.buttonZone}>
        <Pressable
          onPress={onSunmit}
          style={
            !canGoNext
              ? Styles.loginButton
              : StyleSheet.compose(
                  Styles.loginButton,
                  Styles.loginButtionActive,
                )
          }
          disabled={!canGoNext}>
          <Text style={Styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable onPress={onSunmit} style={Styles.loginButton}>
          <Text>회원가입</Text>
        </Pressable>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  buttonZone: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtionActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  textInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputWrapper: {
    padding: 20,
  },
});

export default SignIn;
