import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as form} from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import primaryFunction from './sagas/sagas';

const reducerTest = (state = [0], action) => {
  switch (action.type) {
    case 'INCREASE_REDUCER_TEST':
      return [...state, 1];
    default:
      return state;
  }
};

const sagaMidleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerTest,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMidleware));

sagaMidleware.run(primaryFunction);

export default store;
