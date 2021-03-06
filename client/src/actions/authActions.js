import axios from 'axios'

import { GET_CURRENT_USER, SIGN_UP, LOGIN } from './types'

export const getCurrentUser = () => async dispatch => {
  let res;
  try {
    res = await axios.get('/auth/current_user');
    if(res.status === 200){
      return dispatch ({
        type: GET_CURRENT_USER,
        payload: res.data
      })
    }
  }
  catch(e) {
  }
}

export const Login = user => async dispatch => {
  const res = await axios.post('/auth/login', user);

  if(res.status === 200) {
    return dispatch ({
      type: LOGIN,
      payload: res.data
    })
  }
}

export const signUp = user => async dispatch => {
  let res;
  try{
    res = await axios.post('/auth/signup', user);
    return dispatch({
      type: SIGN_UP,
      payload: res.data
    })
  }
  catch(err) {
    console.log(err);
  }
}
