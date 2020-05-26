import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import SignUpForm from './forms/SignUpForm';

const SignUpScreen = (props) => {
  const {navigation, number, increase} = props;
  console.log(number);
  return (
    <View style={styles.container}>
      <SignUpForm />
      <Button title="Regresar a Sign In" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

const mapStateToProps = (state) => {
  return {
    number: state.reducerTest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => {
      dispatch({type: 'INCREASE_REDUCER_TEST'});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
