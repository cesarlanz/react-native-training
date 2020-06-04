import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {auth} from './store/services/firebase';
import AuthRoutes from './components/auth/AuthRoutes';
import UnauthRoutes from './components/unauth/UnauthRoutes';
import {actionSetSession, actionCloseSession} from './store/actions';

const Selection = (props) => {
  useEffect(() => {
    props.authentication();
  });

  return props.user ? <AuthRoutes /> : <UnauthRoutes />;
};

const mapStateToProps = (state) => {
  return {
    user: state.reducerSession,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authentication: () => {
      //dispatch(actionCreator);
      auth.onAuthStateChanged((user) => {
        if (user) {
          dispatch(actionSetSession(user));
        } else {
          dispatch(actionCloseSession());
        }
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
