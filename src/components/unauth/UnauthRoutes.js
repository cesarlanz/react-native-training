import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const Stack = createStackNavigator();

const UnauthRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{title: 'Entrar'}}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{title: 'Salir'}}
    />
  </Stack.Navigator>
);

export default UnauthRoutes;
