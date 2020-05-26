import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import FollowScreen from './FollowScreen';

const Tab = createMaterialTopTabNavigator();

const FollowTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Follow"
      component={FollowScreen}
      options={{title: 'Follow'}}
    />
    <Tab.Screen
      name="Followers"
      component={FollowScreen}
      options={{title: 'Followers'}}
    />
  </Tab.Navigator>
);

export default FollowTab;
