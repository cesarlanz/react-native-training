import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const AddScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text>Add Screen</Text>
    <Button title="Add" onPress={() => navigation.navigate('Add')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddScreen;
