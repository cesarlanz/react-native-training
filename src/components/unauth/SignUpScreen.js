import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import SignUpForm from './forms/SignUpForm';

const SignUpScreen = (props) => {
  const {navigation, number, increase} = props;
  console.log(number);

  const handleRegisterUser = (values) => {
    console.log(values);
    props.registerUser(values); // Propiedad inyectada por mapDispatchToProps
  };

  return (
    <View style={styles.container}>
      <SignUpForm onRegisterUser={handleRegisterUser} />
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
    registerUser: (values) => {
      dispatch({type: 'REGISTER_USER', data: values});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
