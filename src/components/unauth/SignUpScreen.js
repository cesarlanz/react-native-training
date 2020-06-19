import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import SignUpForm from './forms/SignUpForm';
import {actionRegisterUser} from '../../store/actions';
import SelectImage from '../SelectImage';
import constants from '../../store/constants';

const SignUpScreen = (props) => {
  const {navigation} = props;

  const handleRegisterUser = (values) => {
    props.registerUser(values); // Propiedad inyectada por mapDispatchToProps
  };

  const handleUploadImage = (image) => {
    props.uploadImage(image); // Propiedad inyectada por mapDispatchToProps
  };

  const handleCleanImage = () => {
    props.cleanImage(); // Propiedad inyectada por mapDispatchToProps
  };

  useEffect(() => {
    return () => {
      handleCleanImage();
    };
  });

  return (
    <View style={styles.container}>
      <SelectImage image={props.image} onUploadImage={handleUploadImage} />
      <SignUpForm onRegisterUser={handleRegisterUser} />
      <Button title="Regresar a Sign In" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    number: state.reducerTest,
    image: state.reducerSignUpImage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (values) => {
      dispatch(actionRegisterUser(values));
    },
    uploadImage: (image) => {
      dispatch({type: constants.SET_SIGNUP_IMAGE, image});
    },
    cleanImage: () => {
      dispatch({type: constants.CLEAN_SIGNUP_IMAGE});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
