import React, { useEffect, useState } from 'react';
import './index.css';
import { Redirect } from 'react-router-dom';

import Header from '../../components/Headers/index';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/index';
import Layout from '../../components/layouts/index';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector((state) => state.auth);
  const message = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const AuthUser = JSON.parse(localStorage.getItem('user'));

  if (localStorage.getItem('token') != undefined) {
    if (AuthUser.role === 'etudiant') {
      return <Redirect to="/etudiant/dashboard" />;
    } else if (AuthUser.role === 'admin') {
      return <Redirect to="/admin/dashboard" />;
    }
  }

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  if (auth.authenticate && auth.user.role === 'etudiant') {
    return <Redirect to="/etudiant/dashboard" />;
  } else if (auth.authenticate && auth.user.role === 'admin') {
    return <Redirect to="/admin/dashboard" />;
  }
  return (
    <div>
      <body>
        <div id="login-box">
          <div class="left" style={{marginLeft: "60px"}} >
            <br/><br/><br/>
            <h1 id="logo">CourApp</h1>

            <form method="POST" action="#" id="login">
              <br />
              <br />
              <label for="mail">entrer votre mail:</label>
              <input type="email" name="mail"
                placeholder="Exemple@gmail.com" value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }} />
              <label for="password">entrer votre mot de passe:</label>
              <input type="password" name="password"
                placeholder="Mot de passe:" value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <nav>

                <a href='#'
                  style={{
                    fontSize: "15px", marginLeft: "32px"
                  }}
                >vous avez oublier votre mot de passe?</a>
              </nav>
              <br></br>
              <br />
           
                  {   /*           <button  type="submit" className="form__button"
                style={{ marginLeft: "29px" }}
                onClick={userLogin}>Connexion</button> */}

              <button type="submit" className="form__button"
                style={{ marginLeft: "29px" }}
                onClick={userLogin}>Connexion</button>
              <br />
              <br />
              <a href='/register'
                style={{
                  fontSize: "20px", marginLeft: "30px"
                }}
              >inscrivez vous maintenant?</a>
            </form >
          </div>
          <div class="right"
          /*
            style={{ backgroundColor: "#b6e2fc" }} */>
            <img
              src='/front1.png'
              style={{ width: "800px", height: "800px" }}
            />
          </div>
        </div>
      </body >

    </div >
  );
}
export default Login;
