import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Selection from './src/Selection';
import store from './src/store/store';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Selection />
    </NavigationContainer>
  </Provider>
);

export default App;
