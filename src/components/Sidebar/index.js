import "./index.css";
import { signout } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const Sidebar = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    dispatch(signout());
    history.push("/");
  };
  return (
    <div id="sidebar">
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="/etudiant/acceuil">Acceuil</a>
        </div>
        <h2>USERS</h2>
        <div className="sidebar__link">
          <i className="fa fa-user" aria-hidden="true"></i>
          <a href="/etudiant/profil">Mon Profil</a>
        </div>

        <h2>Cours</h2>
        <div className="sidebar__link">
          <i className="fa fa-check"></i>
          <a href="/Cours" >Mes Cours</a>
        </div>
        <br />
        <div className="sidebar__link">
          <i className="fa fa-check"></i>
          <a href="#" >Mes Dossiers</a>
        </div>
        <div className="sidebar__logout">
          <i class="fas fa-sign-out-alt"></i>
          <a href="/" onClick={logout}
          >Déconnexion</a>
        </div>
      </div>

    </div>
  )
}

export default Sidebar;