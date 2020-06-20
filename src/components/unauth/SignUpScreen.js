import React, {useEffect} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {blur, change} from 'redux-form';
import SignUpForm from './forms/SignUpForm';
import {
  actionRegisterUser,
  actionUploadImageSignUp,
  actionCleanImageSignUp,
} from '../../store/actions';
import SelectImage from '../SelectImage';

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
    const unsubscribe = navigation.addListener('blur', (payload) => {
      handleCleanImage();
    });
    return unsubscribe;
  });

  return (
    <View style={styles.container}>
      <SelectImage image={props.image} onUploadImage={handleUploadImage} />
      <SignUpForm image={props.image} onRegisterUser={handleRegisterUser} />
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
      dispatch(actionUploadImageSignUp(image));
      dispatch(blur('SignUpForm', 'image', Date.now()));
    },
    cleanImage: () => {
      dispatch(actionCleanImageSignUp());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
