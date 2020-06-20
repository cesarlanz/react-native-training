import constants from '../store/constants';

export const actionRegisterUser = (values) => ({
  type: constants.REGISTER_USER,
  data: values,
});

export const actionLoginUser = (values) => ({
  type: constants.LOGIN_USER,
  data: values,
});

export const actionSetSession = (values) => ({
  type: constants.SET_SESSION,
  data: values,
});

export const actionCloseSession = () => ({
  type: constants.CLOSE_SESSION,
});

export const actionUploadImageSignUp = (image) => ({
  type: constants.SET_SIGNUP_IMAGE,
  image,
});

export const actionCleanImageSignUp = () => ({
  type: constants.CLEAN_SIGNUP_IMAGE,
});
