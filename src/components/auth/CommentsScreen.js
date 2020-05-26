import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const CommentsScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text>Comments Screen</Text>
    <Button title="Author" onPress={() => navigation.push('Author')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CommentsScreen;
