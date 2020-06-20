import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ImageField = (props) => {
  const {meta} = props;
  return (
    <View style={styles.container}>
      {meta.touched && meta.error && (
        <Text style={styles.error}>{meta.error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    alignItems: 'center',
  },
  error: {
    color: '#f00',
  },
});

export default ImageField;
