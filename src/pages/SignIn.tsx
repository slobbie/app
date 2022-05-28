import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useRef, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {RootStackParamList} from '../../App';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function SignIn({navigation}: SignInScreenProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const onChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);
  const onChangePassword = useCallback(text => {
    setPassword(text);
  }, []);
  const onSunmit = useCallback(() => {
    if (!email || !email.trim()) {
      return Alert.alert('이메일을 입력해주세요');
    }
    if (!password || !password.trim()) {
      return Alert.alert('비밀번호를 입력해주세요');
    }
    return Alert.alert('로그인 되었습니다.');
  }, [email, password]);

  const canGoNext = email && password;

  const toSignUp = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

  return (
    <View>
      <View style={Styles.inputWrapper}>
        <Text style={Styles.label}>이메일</Text>
        <TextInput
          style={Styles.textInput}
          placeholder="이메일을 입력해주세요."
          value={email}
          onChangeText={onChangeEmail}
          importantForAutofill="yes"
          keyboardType="email-address"
          autoComplete="email"
          textContentType="emailAddress"
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          blurOnSubmit={false}
          ref={emailRef}
          //아이폰에서만 적용 (입력 데이터 지우는 버튼 생성)
          clearButtonMode="while-editing"
        />
      </View>
      <View style={Styles.inputWrapper}>
        <Text style={Styles.label}>비밀번호</Text>
        <TextInput
          style={Styles.textInput}
          value={password}
          placeholder="비밀번호를 입력해주세요."
          onChangeText={onChangePassword}
          secureTextEntry
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
          ref={passwordRef}
          onSubmitEditing={onSunmit}
          keyboardType="phone-pad"
          clearButtonMode="while-editing"
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
        <Pressable onPress={toSignUp}>
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
