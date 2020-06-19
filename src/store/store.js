import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as form} from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import primaryFunction from './sagas/sagas';
import constants from './constants';

const reducerTest = (state = [0], action) => {
  switch (action.type) {
    case 'INCREASE_REDUCER_TEST':
      return [...state, 1];
    default:
      return state;
  }
};

const reducerSession = (state = null, action) => {
  switch (action.type) {
    case constants.SET_SESSION:
      return action.data;
    case constants.CLOSE_SESSION:
      return null;
    default:
      return state;
  }
};

const reducerSignUpImage = (state = null, action) => {
  switch (action.type) {
    case constants.SET_SIGNUP_IMAGE:
      return action.image;
    case constants.CLEAN_SIGNUP_IMAGE:
      return null;
    default:
      return state;
  }
};

const sagaMidleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerTest,
  reducerSession,
  reducerSignUpImage,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMidleware));

sagaMidleware.run(primaryFunction);

export default store;
