import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import FollowStack from './FollowStack';

import AddScreen from './AddScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';
  if (routeName === 'Comments') {
    return false;
  }
  return true;
};

const AuthRoutes = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={({route}) => ({
        title: 'Home',
        tabBarVisible: getTabBarVisibility(route),
      })}
    />
    <Tab.Screen
      name="Search"
      component={SearchStack}
      options={({route}) => ({
        title: 'Search',
        tabBarVisible: getTabBarVisibility(route),
      })}
    />
    <Tab.Screen name="Add" component={AddScreen} options={{title: 'Add'}} />
    <Tab.Screen
      name="Follow"
      component={FollowStack}
      options={({route}) => ({
        title: 'Follow',
        tabBarVisible: getTabBarVisibility(route),
      })}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{title: 'Profile'}}
    />
  </Tab.Navigator>
);

export default AuthRoutes;
