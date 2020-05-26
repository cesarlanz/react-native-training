import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import UnauthRoutes from './src/components/unauth/UnauthRoutes';
import AuthRoutes from './src/components/auth/AuthRoutes';
import store from './src/store/store';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <UnauthRoutes />
    </NavigationContainer>
  </Provider>
);

export default App;
