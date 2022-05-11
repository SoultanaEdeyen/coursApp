import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Headers/test'
import Sidebar from '../../components/Sidebar'
import { Redirect } from 'react-router-dom';
import { ADDCours, getAllAdmin } from '../../actions/index';
import './index.css';

function ajoutCoursForm() {

    const [titre, setTitre] = useState('');
    const [typeC, setTypeC] = useState("");
    const [cmt, setCmt] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        //  dispatch(getCategories());
    }, []);
    const [document, setDocument] = useState();

    const formImageData = new FormData();
    const onFileSubmit = () => {
      console.log("file submit")
      //image
    
      formImageData.append('Contrat', document);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      }
      console.log('id formation :  ' + formImageData)
      //action
      const cour = {
        titre,
        typeC,
        cmt,
    //  document:formImageData,
        Etudiant
    };
    console.log("cour " + cour);
    dispatch(ADDCours(cour,config));
    }
    function onChangeDocument(e) {
        setDocument(e.target.files[0]);
    }
    console.log("cour " + formImageData);


    const Etudiant = JSON.parse(localStorage.getItem('ETUDIANT_id'));

    //  ETUDIANT_id
    const ADD = (e) => {
        const cour = {
            titre,
            typeC,
            cmt,
            Etudiant
        };
        console.log("cour " + cour);
        dispatch(ADDCours(cour));
    };
    const cours = useSelector((state) => state.cours.message);
    console.log("cours " + cours);
    if (cours) {
        return <Redirect to="/Cours" />;
    }

    return (
        <div>
            <Header />
            <div className='sideBarSide' >
                <Sidebar />
            </div>
            <div className='RightSide'>
                <div id="ajout-box">
                    <div style={{ padding: '10px' }}>
                        <h1 >ajoutez un cour</h1>

                        <form id="add-cour"
                        /*onSubmit={userSignup}*/
                        >
                            <input type="text" name="titreCour"
                                style={{ width: '400px' }}
                                value={titre}
                                onChange={(e) => {
                                    setTitre(e.target.value);
                                }}
                                placeholder="donnez le titre du cour :" />
                            <br />
                            <input type="text" name="niveau" style={{ width: '400px' }}
                                value={cmt}
                                onChange={(e) => {
                                    setCmt(e.target.value);
                                }}
                                placeholder="donnez votre commentaire sur le cour :" />

                            <br />
                            <input type="file" name="Contrat"  style={{ width: '400px' }} class="form-control" onChange={onChangeDocument} 
                           accept="image/png, image/gif, image/jpeg"
                          />
                          <small className="form-text text-muted">
                            Max. taille du fichier: 50 Mo
                          </small>
                            <fieldset>
                                <legend>choisissez le statut du cour:</legend>
                                <select type="radio"
                                    onChange={(e) => {
                                        setTypeC(e.target.value);
                                    }}

                                    style={{ width: '450px', marginBottom: '20px' }}>
                                    <option key="private" value="private" >privé</option>
                                    <option key="public" value="public">public</option>
                                </select>
                            </fieldset>
                            <br />
                            <button className="form__button"
                                style={{ marginLeft: "50px" }}
                             onClick={ADD} 
                            //type="submit"
                            >ajoutez cours</button>

                        </form >

                    </div>

                </div>


            </div >
        </div >
    );
}
export default ajoutCoursForm;