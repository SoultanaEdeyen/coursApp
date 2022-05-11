import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Headers/test'
import Sidebar from '../../components/Sidebar'
import moment from "moment";
import { Container, Row, Col, Table, Button, Pagination, Modal } from 'react-bootstrap'
import './index.css';
import { getCoursByIdEtudiant, getAllCOURS, deleteCours } from '../../actions'

function Index() {

    const ETUDIANT_id = JSON.parse(localStorage.getItem('ETUDIANT_id'));

    const dispatch = useDispatch();


    //const [Libelle, setLibelle] = useState();


    useEffect(() => {
        dispatch(getAllCOURS());
        // dispatch(getCoursByIdEtudiant(ETUDIANT_id))
    }, []);

    const Alert = (id) => {
        console.log(id)
        var res = confirm("Etes-vous sur de vouloir supprimer?")
        if (res) {
            dispatch(deleteCours(id))
            dispatch(getAllCOURS());
        }
        // 
    };

    const cours = useSelector((state) => state.cours.cours);
    console.log(cours);
    return (
        <div>
            <Header />
            <div className='sideBarSide' >
                <Sidebar />
            </div>
            <div className='RightSide'>
                <div className="image-upload">
                    <a
                        href='/ajoutCoursForm'
                        style={{ boxShadow: "none" }}>
                        <img id="previewImg" src="/addbutton.gif" style={{
                            marginLeft: "70px", marginTop: "30px",
                            width: "160px", height: "120px", borderRadius: "5px",
                            backgroundColor: "white"
                        }} />

                    </a>
                    <h5 style={{
                        marginLeft: "110px", marginTop: "5px",
                        fontSize: "18px", color: "#3E6696", position: "absolute"
                    }}>ajouter cour</h5>

                </div>
                <div className='RightSide'>
                    <br /> <br /> <br /> <br /> <br /> <br />

                    <table class="responstable">

                        <tr>
                            <th>#</th>
                            <th>Libelle</th>
                            <th>état</th>
                            <th data-th="Driver details"><span>Détails</span></th>
                            <th>Date </th>
                            <th class="text-center">Actions</th>
                        </tr>
                        {cours && cours.length > 0
                            ? cours.map((cour, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{cour.titre}</td>
                                    <td>
                                        {cour.typeC == "public" ? (
                                            <span style={{ color: "green" }}>
                                                {cour.typeC}
                                            </span>
                                        ) : cour.typeC == "private" ? (
                                            <span style={{ color: "red" }}>
                                                {cour.typeC}
                                            </span>
                                        ) : (
                                            " "
                                        )}
                                    </td>
                                    <td>Détails</td>
                                    <td>{
                                        moment(cour.createdAt).format("YYYY-MM-DD hh:mm")}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <button style={{
                                            backgroundColor: "#4cd964",
                                            borderRadius: "5px",
                                            fontSize: "12px",
                                            fontweight: "bold",
                                            padding: "5px 15px",
                                            letterSpacing: "1px",
                                            textTransform: "uppercase",
                                            transition: "transform 80ms ease-in ",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "white",
                                            borderColor: "white",
                                            cursor: "pointer"

                                        }}> Modifier </button>
                                        <button style={{
                                            backgroundColor: "#e65061",
                                            borderRadius: "5px",
                                            fontSize: "12px",
                                            fontweight: "bold",
                                            padding: "5px 15px",
                                            letterSpacing: "1px",
                                            textTransform: "uppercase",
                                            transition: "transform 80ms ease-in ",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "white",
                                            borderColor: "white",
                                            cursor: "pointer"

                                        }}
                                            onClick={() => Alert(cour._id)}
                                        > Supprimer </button>
                                    </td>
                                </tr>
                            ))
                            : " "}
                    </table>
                </div>
            </div>
            <i class="fa-circle-plus" />

        </div >
    )
}
export default Index