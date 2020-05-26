import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const PostScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text>Post Screen</Text>
    <Button title="Author" onPress={() => navigation.push('Author')} />
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

export default PostScreen;
