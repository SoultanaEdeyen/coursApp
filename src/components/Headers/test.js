import React from 'react'
import './index.css';
import * as FaIcons from 'react-icons/fa';
//import sidebar from '../Sidebar/index'

const test = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

            <ul>
                <li><a id='logo1' href="/">CoursesApp</a></li>
                <li class="dropdown"
                    style={{
                        marginLeft: '1250px'
                    }}
                >
                    <a href="javascript:void(0)" class="dropbtn"

                    >
                        <FaIcons.FaBars />
                    </a>

                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default test
