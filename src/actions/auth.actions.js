import {authConstants} from './constants';
import axios from '../helpers';
import {getAdminByIdUser, getEtudiantByIdUser,getCentreByIdUser,getFormateurByIdUser , getFormateur} from './index';

export const login = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
    });
    const res = await axios
      .post(`/login`,user)
      .then((res) => {
        console.log(res)
        const {token, user} = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        if(user){
          localStorage.setItem('User', JSON.stringify(user._id));

          console.log(user._id)
        }
        // dispatch(getFormateur());
       /* if (user.role === 'etudiant') {
          dispatch(getEtudiantByIdUser(user._id));
        }else if (user.role === 'admin') {
          dispatch(getAdminByIdUser(user._id));
        }else*/
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      })
      .catch((err) => {
        //console.log(err.response)
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: {
            error: err.response.data
          },
        });
      });
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({type: authConstants.LOGOUT_REQUEST});
    const res = await axios.post(`/signout`);
    if (res.status == 200) {
      localStorage.clear();
      dispatch({
        type: authConstants.LOGOUT_SUCCESS,
      });
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: {error: res.data.error},
      });
    }
  };
};