import axios from '../helpers';
import { EtudiantConstants } from './constants';

export const getEtudiantByIdUser = (id) => {
    console.log(id)
    return async (dispatch) => {
        dispatch({
            type: EtudiantConstants.GETBYIDUSER_ETUDIANT_REQUEST,
        });
        const res = await axios.get(`/etudiant/getByIdUser/` + id)
            .then((res) => {
                // succes
                console.log(res.data);
                localStorage.setItem('ETUDIANT', JSON.stringify(res.data));
                if (res.data) {
               //     localStorage.setItem('ETUDIANT_id', JSON.stringify(res.data._id));

                }
                dispatch({
                    type: EtudiantConstants.GETBYIDUSER_ETUDIANT_SUCCESS,
                    payload: { etudiant: res.data }
                });
            })
            .catch((err) => {
                // echec
                dispatch({
                    type: EtudiantConstants.GETBYIDUSER_ETUDIANT_FAILURE,
                    payload: { error: err.response.data }
                });
            });
    };
};

export const updateEtudiant = (id, ETUDIANT) => {
    return async (dispatch) => {
        dispatch({
            type: EtudiantConstants.UPDATE_ETUDIANT_REQUEST,
        });
        await axios.put(`/etudiant/update/` + id, ETUDIANT)
            .then((res) => {
                // succes
                console.log(res.data);
                dispatch({
                    type: EtudiantConstants.UPDATE_ETUDIANT_SUCCESS,
                    payload: { etudiant: res.data },
                });
            })
            .catch((err) => {
                // echec
                dispatch({
                    type: EtudiantConstants.UPDATE_ETUDIANT_FAILURE,
                    payload: { error: err.data.error }
                });
            });
    };
};


export const getAllEtudiant = () => {
    return async (dispatch) => {
        dispatch({
            type: EtudiantConstants.GET_ETUDIANT_REQUEST,
        });
        const res = await axios.get(`/etudiant`)
            .then((res) => {
                // succes
                console.log(res.data);
                dispatch({
                    type: EtudiantConstants.GET_ETUDIANT_SUCCESS,
                    payload: { etudiant: res.data }
                });
            })
            .catch((err) => {
                // echec
                dispatch({
                    type: EtudiantConstants.GET_ETUDIANT_FAILURE,
                    payload: { error: err.response.data }
                });
            });
    };
};