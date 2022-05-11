import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Headers/test'
import Sidebar from '../../components/Sidebar'
import { Redirect } from 'react-router-dom';
import { ADDCours, getAllAdmin } from '../../actions/index';
import './index.css';

//Notifications
//import { toast } from 'react-toastify'
//import 'react-toastify/dist/ReactToastify.css'

function ajoutCoursForm() {

    const [titre, setTitre] = useState('');
    const [typeC, setTypeC] = useState("");
    const [cmt, setCmt] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        //  dispatch(getCategories());
    }, []);
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
    /*
  
    var idC;
    const IdCategorie = (id) => {
      idC = id;
      console.log(idC);
    };
    const Delete = () => {
      console.log(idC);
      dispatch(DeleteCategorie(idC));
      dispatch(getCategories());
  
    };
    const [id, setid] = useState("");
  
    const ID = (Id) => {
      setid (Id)
      console.log(id);
    };
    const Update = () => {
      console.log(idC);
      console.log(libelle, type);
      const updates = {
        libelle,
        type,
      };
      dispatch(updatecategorie(id, updates));
      dispatch(getCategories());
      window.location.reload();
    };
  
  
      /*const [password, setPassword] = useState('');
      const [prenom, setPrenom] = useState('');
      const [nom, setNom] = useState('');
      const [telephone, setTelephone] = useState('');
      const [role, setrole] = useState('etudiant');
    
      const dispatch = useDispatch();
    
      const register = useSelector((state) => state.register);
    
      const error = useSelector((state) => state.register.error);
      console.log(error)
      const userSignup = (e) => {
        e.preventDefault();
        //   console.log(role)
        var Password = document.getElementById("Password").value
        var confirmpassword = document.getElementById("password-confirm").value
        if (Password != confirmpassword) {
          //   toast.warn('Les champs "Mot de passe" et "Confirmation du mot de passe" doivent être identiques.', { position: toast.POSITION.TOP_RIGHT, className: "custom-toast", draggable: true, })
          //La confirmation du mot de passe doit correspondre au mot de passe saisi précédemment.
        } else {
          const user = {
            email,
            password,
            role,
            prenom,
            nom,
            telephone,
          };
          console.log(user)
          dispatch(ADDCours(user));
        };
      }*/

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