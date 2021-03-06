import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import TextField from './../../common/TextField';
import ImageField from './../../common/ImageField';

const SignUpForm = (props) => {
  return (
    <View style={styles.container}>
      <Field component={ImageField} name="image" />
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
        onPress={props.handleSubmit(props.onRegisterUser)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingHorizontal: 16,
  },
});

const validate = (values, props) => {
  const errors = {};
  console.log('IMAGEN', props.image);
  if (!props.image) {
    errors.image = 'Image is required';
  }
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
