import axios from '../helpers';
import { AdminConstants } from './constants';

export const getAdminByIdUser = (id) => {
    console.log(id)
    return async (dispatch) => {
        dispatch({
            type: AdminConstants.GETBYIDUSER_ADMIN_REQUEST,
        });
        const res = await axios.get(`/admin/getByIdUser/` + id)
            .then((res) => {
                // succes
                console.log(res.data);
                localStorage.setItem('Admin', JSON.stringify(res.data));
                dispatch({
                    type: AdminConstants.GETBYIDUSER_ADMIN_SUCCESS,
                    payload: { Admin: res.data }
                });
            })
            .catch((err) => {
                // echec
                dispatch({
                    type: AdminConstants.GETBYIDUSER_ADMIN_FAILURE,
                    payload: { error: err.response.data }
                });
            });
    };
};

export const updateAdmin = (id, admin) => {
    return async (dispatch) => {
        dispatch({
            type: AdminConstants.UPDATE_ADMIN_REQUEST,
        });
        await axios.put(`/admin/update/` + id, admin)
            .then((res) => {
                // succes
                console.log(res.data);
                dispatch({
                    type: AdminConstants.UPDATE_ADMIN_SUCCESS,
                    payload: { Admin: res.data },
                });
            })
            .catch((err) => {
                // echec
                dispatch({
                    type: AdminConstants.UPDATE_ADMIN_FAILURE,
                    payload: { error: err.data.error }
                });
            });
    };
};


export const getAllAdmin = () => {
    return async (dispatch) => {
      dispatch({
        type: AdminConstants.GET_ADMIN_REQUEST,
      });
      const res = await axios.get(`/admin`)
        .then((res) => {
          // succes
          console.log(res.data);
          dispatch({
            type: AdminConstants.GET_ADMIN_SUCCESS,
            payload: { admin: res.data }
          });
        })
        .catch((err) => {
          // echec
          dispatch({
            type: AdminConstants.GET_ADMIN_FAILURE,
            payload: { error: err.response.data }
          });
        });
    };
  };