import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {auth} from './../../store/services/firebase';

const ProfileScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text>Profile Screen</Text>
    <Button title="Post" onPress={() => navigation.push('Post')} />
    <Button title="Exit" onPress={() => auth.signOut()} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
