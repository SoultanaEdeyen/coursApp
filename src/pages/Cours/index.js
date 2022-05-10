import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Headers/test'
import Lottie from 'lottie-web';
import Sidebar from '../../components/Sidebar'

import Footer from '../../components/Footers';

import './index.css';
function Index() {
    useEffect(() => {
        Lottie.loadAnimation({})
    }, [])

    return (
        <div>
            <Header />
            <div className='sideBarSide' >
                <Sidebar />
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            <div className='RightSide'>

                <div className="image-upload">
                    <label htmlFor="file-input">
                        <img id="previewImg" src="/addbutton.gif" style={{
                            marginLeft: "70px", marginTop: "30px",
                            width: "160px", height: "120px", borderRadius: "5px",
                            backgroundColor: "white"
                        }} />

                    </label>
                    <input id="file-input" type="file" onchange="previewFile(this);" style={{ display: 'none' }} />

                    <label htmlFor="file-input">
                        <img id="previewImg" src="/addbutton.gif" style={{
                            marginLeft: "70px", marginTop: "30px",
                            width: "160px", height: "120px", borderRadius: "5px",
                            backgroundColor: "white"
                        }} />

                    </label>
                    <input id="file-input" type="file" onchange="previewFile(this);" style={{ display: 'none' }} />

                    <h5 style={{
                        marginLeft: "110px", marginTop: "5px",
                        fontSize: "18px", color: "#3E6696", position: "absolute"
                    }}>ajouter cour</h5>

                    <h5 style={{
                        marginLeft: "320px", marginTop: "5px", position: "relative",
                        fontSize: "18px", color: "#3E6696"
                    }}>créer un dossier</h5>

                </div>




            </div>

            <Footer />


        </div >
    )
}
export default Index