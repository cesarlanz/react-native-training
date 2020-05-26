import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button title="Profile" onPress={() => navigation.push('Author')} />
    <Button title="Comments" onPress={() => navigation.push('Comments')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
