import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PostScreen from './PostScreen';
import SearchScreen from './SearchScreen';
import AuthorScreen from './ProfileScreen';
import CommentsScreen from './CommentsScreen';

const Stack = createStackNavigator();

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{title: 'Search'}}
    />
    <Stack.Screen
      name="Post"
      component={PostScreen}
      options={{title: 'Post'}}
    />
    <Stack.Screen
      name="Author"
      component={AuthorScreen}
      options={{title: 'Author'}}
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

export default SearchStack;
