import axios from '../helpers';
import { CoursConstants } from './constants';

export const ADDCours = (form) => {
    return async (dispatch) => {
        dispatch({
            type: CoursConstants.ADD_COURS_REQUEST,
        });
        const res = await axios.post(`/cours/add`, form);
        console.log(res.data);
        //  localStorage.setItem("res.data", JSON.stringify(res.data));
        if (res.status === 200) {
            // succes 
            //  localStorage.setItem('idCOURS', res.data._id);
            dispatch({
                type: CoursConstants.ADD_COURS_SUCCESS,
                payload: { cours: res.data },
            });
        } else {
            // echec
            dispatch({
                type: CoursConstants.ADD_COURS_FAILURE,
                payload: { error: res.data.error },
            });
        }
    };
};


export const getCoursByIdUser = (id) => {
    console.log(id)
    return async (dispatch) => {
        dispatch({
            type: CoursConstants.GETBYIDUSER_COURS_REQUEST,
        });
        const res = await axios.get(`/cours/getByIdUser/` + id)
            .then((res) => {
                // succes
                dispatch({
                    type: CoursConstants.GETBYIDUSER_COURS_SUCCESS,
                    payload: { cours: res.data }
                });
            })
            .catch((err) => {
                // echec
                dispatch({
                    type: CoursConstants.GETBYIDUSER_COURS_FAILURE,
                    payload: { error: err.response.data }
                });
            });
    };
};

export const updateCours = (id, cours) => {
    return async (dispatch) => {
        dispatch({
            type: CoursConstants.UPDATE_COURS_REQUEST,
        });
        await axios.put(`/cours/update/` + id, cours)
            .then((res) => {
                // succes
                console.log(res.data);
                dispatch({
                    type: CoursConstants.UPDATE_COURS_SUCCESS,
                    payload: { cours: res.data },
                });
            })
            .catch((err) => {
                // echec
                dispatch({
                    type: CoursConstants.UPDATE_COURS_FAILURE,
                    payload: { error: err.data.error }
                });
            });
    };
};


export const getAllCOURS = () => {
    return async (dispatch) => {
        dispatch({
            type: CoursConstants.GET_COURS_REQUEST,
        });
        const res = await axios.get(`/cours`)
            .then((res) => {
                // succes
                console.log(res.data);
                dispatch({
                    type: CoursConstants.GET_COURS_SUCCESS,
                    payload: { cours: res.data }
                });
            })
            .catch((err) => {
                // echec
                dispatch({
                    type: CoursConstants.GET_COURS_FAILURE,
                    payload: { error: err.response.data }
                });
            });
    };
};