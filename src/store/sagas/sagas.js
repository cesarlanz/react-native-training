import {takeEvery, call} from 'redux-saga/effects';
import {authentication} from '../services/firebase';

const registerOnFirebase = (values) =>
  authentication
    .createUserWithEmailAndPassword(values.email, values.password)
    .then((success) => {
      console.log('success', success);
    })
    .catch((error) => {
      console.log('error', error);
      var errorCode = error.code;
      var errorMessage = error.message;
    });

function* registerGenerator(values) {
  yield call(registerOnFirebase, values.data);
  console.log(values);
}

export default function* primaryFunction() {
  yield takeEvery('REGISTER_USER', registerGenerator);
  console.log('FUNCION GENERADORA');
}
