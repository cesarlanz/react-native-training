import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import AuthorScreen from './ProfileScreen';
import PostScreen from './PostScreen';
import CommentsScreen from './CommentsScreen';
import SearchScreen from './SearchScreen';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{title: 'Home'}}
    />
    <Stack.Screen
      name="Author"
      component={AuthorScreen}
      options={{title: 'Author'}}
    />
    <Stack.Screen
      name="Post"
      component={PostScreen}
      options={{title: 'Post'}}
    />
    <Stack.Screen
      name="Comments"
      component={CommentsScreen}
      options={{
        title: 'Comments',
      }}
    />
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{title: 'Search'}}
    />
  </Stack.Navigator>
);

export default HomeStack;
