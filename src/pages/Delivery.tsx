import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Complete from './Complete';
import Ing from './Ing';

function Delivery() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Ing">
      <Stack.Screen name="Ing" component={Ing} options={{headerShown: false}} />
      <Stack.Screen
        name="Complete"
        component={Complete}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Delivery;
