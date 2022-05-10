/*import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const AdminHeader = () => {

  return (
    <div class="header">
      <div className="header-left">
        <a href="/" className="logo">
        CoursApp
        </a>
        <a href="/" className="logo logo-small">
          CoursApp
   
        </a>
      </div>
    
      <a href="javascript:void(0);" id="toggle_btn">
        {' '}
        <FaIcons.FaBars/>
      </a>
      <div className="top-nav-search">
      </div>
      <a class="mobile_btn" id="mobile_btn">
        {' '}
        <FaIcons.FaBars />
      </a>
      <ul class="nav user-menu">
        <li class="nav-item dropdown">
          <Link to="#" id="btnFullscreen" class=" ">
          <FaIcons.FaRegWindowMaximize/>
          </Link>
        </li>
        <li class="nav-item dropdown has-arrow main-drop ml-3">
          <Link
            to="#"
            class="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <span class="user-img">
             Admin
              <span class="status online" />
            </span>
          </Link>
          <div class="dropdown-menu">
            <Link class="dropdown-item" to="/admin/profile">
             
              {'  '} Profil
            </Link>
            <Link class="dropdown-item">
              
              {'  '} Se déconnecter
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AdminHeader;*/