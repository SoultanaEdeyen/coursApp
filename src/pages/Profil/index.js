import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Headers/test'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footers';
import './index.css';
import Main from './main/main';
function Index() {

    const dispatch = useDispatch();

    useEffect(() => { }, []);
  
    return (
        <div>
            <Header />

            <div className='sideBarSide' >
                <Sidebar />
            </div>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

            <div className='RightSide' style={{/* marginLeft: '900px' */ }} >
                <Main />
            </div>




        </div>
    )
}
export default Index