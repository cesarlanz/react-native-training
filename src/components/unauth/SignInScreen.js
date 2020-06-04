import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import SignInForm from './forms/SignInForm';
import {actionLoginUser} from '../../store/actions';

const SignInScreen = (props) => {
  const {navigation} = props;

  const handleLoginUser = (values) => {
    props.loginUser(values); // Propiedad inyectada por mapDispatchToProps
  };

  return (
    <View style={styles.container}>
      <SignInForm onLoginUser={handleLoginUser} />
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
    loginUser: (values) => {
      dispatch(actionLoginUser(values));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
