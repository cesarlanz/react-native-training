import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const TextField = (props) => {
  console.log('TextField', props);
  const {placeholder, input, type, meta} = props;
  return (
    <View style={styles.textField}>
      <TextInput
        placeholder={placeholder}
        onChangeText={input.onChange}
        keyboardType={keyboardType(type)}
        autoCapitalize={!type || type === 'text' ? 'sentences' : 'none'}
        secureTextEntry={type === 'password'}
        onBlur={input.onBlur}
      />
      <View style={styles.line} />
      {meta.touched && meta.error && (
        <Text style={styles.error}>{meta.error}</Text>
      )}
    </View>
  );
};

const keyboardType = (type = 'text') => {
  switch (type) {
    case 'decimal':
      return 'decimal-pad';
    case 'email':
      return 'email-address';
    case 'number':
      return 'number-pad';
    case 'tel':
      return 'phone-pad';
    case 'url':
      return 'url';
    default:
      return 'default';
  }
};

const styles = StyleSheet.create({
  textField: {
    marginBottom: 16,
  },
  line: {
    backgroundColor: '#dcdcdc',
    height: 2,
  },
  error: {
    color: '#f00',
  },
});

export default TextField;

/*
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">
*/
