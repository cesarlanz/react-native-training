import React from 'react';
import {View, Button} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import TextField from './../../common/TextField';
import {authentication} from './../../../store/services/firebase';

const SignUpForm = (props) => {
  console.log('SignUpForm', props);
  return (
    <View>
      <Field
        component={TextField}
        type="text"
        name="name"
        placeholder="Nombre y Apellido"
      />
      <Field
        component={TextField}
        type="email"
        name="email"
        placeholder="correo@email.com"
      />
      <Field
        component={TextField}
        type="password"
        name="password"
        placeholder="********"
      />
      <Field
        component={TextField}
        type="password"
        name="confirmation"
        placeholder="********"
      />
      <Button
        title="Registrar"
        onPress={props.handleSubmit(
          props.onRegisterUser,
          // (values) => {
          //   console.log(values);
          //   const {email, password} = values;
          //   authentication
          //     .createUserWithEmailAndPassword(email, password)
          //     .then((success) => {
          //       console.log('success');
          //     })
          //     .catch((error) => {
          //       console.log(error);
          //       var errorCode = error.code;
          //       var errorMessage = error.message;
          //     });
          // }
        )}
      />
    </View>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 8) {
    errors.name = 'Must be 8 characters or more';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 5) {
    errors.password = 'Must be 6 characters or more';
  }
  if (!values.confirmation) {
    errors.confirmation = 'Required';
  } else if (values.password !== values.confirmation) {
    errors.password = 'Passwords must match';
  }
  return errors;
};

export default reduxForm({form: 'SignUpForm', validate})(SignUpForm);
