/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { createContext, useReducer, useContext } from 'react';

<<<<<<< HEAD
const initialState = {
  loggedIn: false, name: {}, item: null, itemsList: null,
};
=======
const initialState = { loggedIn: false, name: {} , item: null, itemsList: null};
>>>>>>> ebca08d739be6d999bbf4b2eb0d16f2b0585f433
const store = createContext(initialState);
const { Provider } = store;

const BASE_URL = 'http://localhost:5000/api';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ITEM = 'ITEM';
const ITEMSLIST = 'ITEMSLIST';

axios.defaults.withCredentials = true;
axios.defaults.headers = {
<<<<<<< HEAD
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, PATCH',
  'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
};
=======
  "Access-Control-Allow-Origin": "*",  
  "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, PATCH",
  "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",     
}
>>>>>>> ebca08d739be6d999bbf4b2eb0d16f2b0585f433

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer((prevState, action) => {
    const { type, payload } = action;

    switch (type) {
      case LOGIN: {
        // Store the profile data in the state
        return { ...prevState, loggedIn: true, ...payload };
      }
      case LOGOUT: {
        // Reset state to logged out
        return initialState;
      }
      case ITEM: {
        return { ...prevState, item: payload };
      }
      case ITEMSLIST: {
        return { ...prevState, item: payload };
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useProfileProvider = () => {
  const { state, dispatch } = useContext(store);

  const login = credentials => axios
    .post(`${BASE_URL}/login`, credentials)
    .then(({ data }) => {
      dispatch({ type: LOGIN, payload: data });
      getItems();
    });

  const register = credentials => axios
    .post(`${BASE_URL}/user`, credentials)
    .then(({ data }) => {
      dispatch({ type: LOGIN, payload: data });
    });

  const item = credentials => axios
<<<<<<< HEAD
    .post(`${BASE_URL}/cart`, { items: [credentials] })
=======
    .post(`${BASE_URL}/cart`, {items: [credentials]})
>>>>>>> ebca08d739be6d999bbf4b2eb0d16f2b0585f433
    .then(({ data }) => {
      dispatch({ type: ITEM, payload: data });
    });

<<<<<<< HEAD
  const getItems = credentials => axios
=======
    const getItems = credentials => axios
>>>>>>> ebca08d739be6d999bbf4b2eb0d16f2b0585f433
    .get(`${BASE_URL}/cart`)
    .then(({ data }) => {
      dispatch({ type: ITEMSLIST, payload: data });
    });

  const logout = () => dispatch({
    type: LOGOUT,
  });


  return {
    state,
    dispatch,
    login,
    logout,
    register,
    item,
  };
};

ProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProfileProvider, useProfileProvider };
