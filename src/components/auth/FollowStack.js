import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FollowTab from './FollowTab';
import PostScreen from './PostScreen';
import AuthorScreen from './ProfileScreen';
import CommentsScreen from './CommentsScreen';

const Stack = createStackNavigator();

const FollowStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="Follow"
      component={FollowTab}
      options={{title: 'Follow'}}
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
  </Stack.Navigator>
);

export default FollowStack;
