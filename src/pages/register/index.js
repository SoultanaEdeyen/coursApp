import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup, getAllAdmin } from '../../actions/index';
import './index.css';
import Footer from '../../components/Footers';
import Header from '../../components/Headers/test'

//Notifications
//import { toast } from 'react-toastify'
//import 'react-toastify/dist/ReactToastify.css'

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      dispatch(signup(user));
    };
  }
  if (register.register) {
    return <Redirect to="/connexion" />;
  }
  return (
    <div>
      <div>
        <Header />
      </div>

      <body>

        <div id="login-box">
          <div class="left">

            <h1 class="logo">CourApp</h1>

            <form id="login"
              onSubmit={userSignup}
            >
              <input type="text" name="nom" placeholder="entrer votre nom :"
                value={nom}
                onChange={(e) => {
                  setNom(e.target.value);
                }} />
              <br />
              <input type="text" name="prenom" value={prenom}
                onChange={(e) => {
                  setPrenom(e.target.value);
                }} placeholder="entrer votre prenom :"
              />
              <br />
              <input type="email" name="mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="entrer votre adress mail:" />
              <br />
              <input type="password" id="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="créer un mot de passe:" //pattern=''
              />
              <br />
              <input type="password" id="password-confirm" placeholder="confirmer votre mot de passe:" />
              <br />
              <input type="date" name="dateNais" placeholder="date de naissance" />
              <br /><br />
              <button className="form__button"
                style={{ marginLeft: "50px" }}
                onClick={userSignup}
              //type="submit"
              >inscrivez</button>

              <div class={error ? 'alert alert-danger' : ' '}
                style={{ color: "#DC143C", backgroundColor: "#ffcccc", marginTop: '7px', textAlign: 'center' }}
              >
                {error}
              </div>

            </form >

          </div>

          <div class="right"
          >
            <img
              src='/front1.png'
              style={{ width: "800px", height: "700px", marginTop: "65px" }}
            />

          </div>
        </div>
      </body >

      <div style={{ marginTop: "300px" }}>
        <Footer />
      </div>

    </div >
  );
}
export default Register;
