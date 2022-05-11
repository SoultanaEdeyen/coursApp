import React from 'react'
import './index.css';
import { signout } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
//import sidebar from '../Sidebar/index'

const Test = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const logout = () => {
        localStorage.clear();
        dispatch(signout());
        history.push("/");
    };

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

            <ul>
                <li><a id='logo1' href="/">CoursesApp</a></li>
                <li class="dropdown"
                    style={{
                        marginLeft: '1200px'
                    }}
                >
                    <a href="javascript:void(0)" class="dropbtn">
                        <FaIcons.FaBars />
                    </a>

                    <div class="dropdown-content">
                        <a href="/etudiant/profil">Profil</a>
                        <div >
                            <i className="fa fa-sign-out" />
                            <a style={{ color: "#e65061" }} href="/" onClick={logout}>Déconnexion</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Test
