import constants from '../store/constants';

export const actionRegisterUser = (values) => ({
  type: constants.REGISTER_USER,
  data: values,
});

export const actionLoginUser = (values) => ({
  type: constants.LOGIN_USER,
  data: values,
});
