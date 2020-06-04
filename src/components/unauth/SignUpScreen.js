import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import SignUpForm from './forms/SignUpForm';
import {actionRegisterUser} from '../../store/actions';

const SignUpScreen = (props) => {
  const {navigation} = props;

  const handleRegisterUser = (values) => {
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
      dispatch(actionRegisterUser(values));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
