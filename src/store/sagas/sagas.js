import {takeEvery, call} from 'redux-saga/effects';
import {auth, base} from '../services/firebase';
import constants from '../../store/constants';

const registerUser = ({email, password}) =>
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((success) => success.user.toJSON());

const createUser = ({uid, email, name}) =>
  base
    .collection('users')
    .doc(uid)
    .set({email, name})
    .then(() => true);

const loginUser = ({email, password}) =>
  auth
    .signInWithEmailAndPassword(email, password)
    .then((success) => success.user.toJSON());

function* sagaRegisterUser(values) {
  try {
    const register = yield call(registerUser, values.data);
    const {uid, email} = register;
    const {
      data: {name},
    } = values;
    yield call(createUser, {uid, email, name});
  } catch (error) {
    console.log(error);
  }
}

function* sagaLoginUser(values) {
  try {
    const login = yield call(loginUser, values.data);
    console.log('login', login);
  } catch (error) {
    console.log(error);
  }
}

export default function* primaryFunction() {
  yield takeEvery(constants.REGISTER_USER, sagaRegisterUser);
  yield takeEvery(constants.LOGIN_USER, sagaLoginUser);
  console.log('FUNCION GENERADORA');
}
