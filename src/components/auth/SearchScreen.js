import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const SearchScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text>Search Screen</Text>
    <Button title="Post" onPress={() => navigation.push('Post')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchScreen;
