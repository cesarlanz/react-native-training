import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const FollowScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text>Follow Screen</Text>
    <Button title="Author" onPress={() => navigation.navigate('Author')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FollowScreen;
