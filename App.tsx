/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCallback} from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onPress = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <>
      <View
        style={{
          flex: 2,
          backgroundColor: 'yellow',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={onPress}
          style={{
            paddingVertical: 20,
            paddingHorizontal: 40,
            backgroundColor: 'blue',
          }}>
          <Text style={{color: 'white'}}>Home Screen</Text>
        </Pressable>
      </View>
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        <Text>second</Text>
      </View>
    </>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={onClick}>
        <Text>Details Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  const [modal, setModal] = React.useState<Boolean>(true);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details">
          {props => <DetailsScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
      {modal && (
        <Pressable onPress={() => setModal(false)} style={styles.modal}>
          <View style={styles.modalInner}>
            <View style={{flex: 1, backgroundColor: 'yellow'}}>
              <Text>모달본문</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Pressable style={{flex: 1, alignItems: 'center'}}>
                <Text>네</Text>
              </Pressable>
              <Pressable style={{flex: 1, alignItems: 'center'}}>
                <Text>아니요</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      )}
    </NavigationContainer>
  );
}
// Stack.Screen 용도는 같은 다만 2번째 경우는 컴포넌트에 추가적인 props를 넘겨 줄때 사용한다.
const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
  },
  modalInner: {
    backgroundColor: 'orange',
    height: 300,
    marginHorizontal: 50,
    width: Dimensions.get('window').width - 100,
    borderRadius: 20,
    padding: 20,
    // ios 에서만 적용
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    textShadowOffset: {width: 5, height: 5},
    // android
    elevation: 15,
  },
});
export default App;
