import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import SignInForm from './forms/SignInForm';

const SignInScreen = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <SignInForm />
      <Button
        title="Ir a SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
