import React from 'react';
import {View, Button} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import TextField from './../../common/TextField';

const SignInForm = (props) => {
  console.log('SignInForm', props);
  return (
    <View>
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
      <Button
        title="Entrar"
        onPress={props.handleSubmit((values) => {
          console.log(values);
        })}
      />
    </View>
  );
};

const validate = (values) => {
  const errors = {};
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
  return errors;
};

export default reduxForm({form: 'SignInForm', validate})(SignInForm);
