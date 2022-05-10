import React from 'react';
import "./index.css";
import { signout } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const Footer = () => {
  return (
    <div>
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

        <footer className="footer-distributed">
          <div className="footer-left" style={{ color: "#2f3640" }}>
            <h3 style={{ color: "#2f3640" }}>Courses<span>App</span></h3>
            <p className="footer-links" style={{ color: "#2f3640" }}>
              <a href="#" className="link-1">Home</a>
              <a href="#">Blog</a>

              <a href="#">About</a>

              <a href="#">Contact</a>

            </p>

            <p className="footer-company-name" style={{ marginTop: "75px" }}>Course App © 2022 All Rights Reserved</p>
          </div>
          <div className="footer-center">
            <span style={{ marginLeft: "50px", fontSize: "22px", fontFamily: 'Rhodium Libre', color: "#ffffff", color: "#2f3640" }}>Contact</span>
            <div>
              <i className="fa fa-map-marker" />
              <p><span><br />5000 Monastir</span> Monastir, Tunisia</p>
            </div>
            <div>
              <i className="fa fa-phone" />
              <p>50.000.000 or 50.000.001</p>
            </div>
            <div>
              <i className="fa fa-envelope" />


              <p><a href="mailto:support@company.com">CoursesApp@gmail.com</a></p>

            </div>
          </div>
          <div className="footer-right">

            <p className="footer-company-about" style={{ fontSize: "14px" }}>
              <span style={{ marginLeft: "50px", fontSize: "22px", fontFamily: 'Rhodium Libre', color: "#2f3640" }}>    About CoursesApp</span>
              <br />
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            </p>

          </div>
        </footer>
      </div>

    </div>


  );
};

export default Footer;