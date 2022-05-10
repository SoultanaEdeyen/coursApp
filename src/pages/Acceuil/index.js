import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Headers/test'
import Lottie from 'lottie-web';
import Sidebar from '../../components/Sidebar'

import Footer from '../../components/Footers';

import './index.css';
function Index() {
    /*
    const Acceuil = useRef(null)

    useEffect(() => {
        Lottie.loadAnimation({
            Acceuil,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('//searchBar.json')
        })
    }, [])
*/
    return (
        <div>
            <Header />
            <div className='sideBarSide' >
                <Sidebar />
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            <div className='RightSide'>
                <div className='search-bar' style={{ marginLeft: "600px", marginTop: "10px" }} >
                    <div className="searchBox" style={{ width: "500px", height: "40px" }}>
                        <input className="searchInput" type="text" name placeholder="chercher un cour..." />
                        <button className="searchButton" href="#">
                            <i className="material-icons">
                                search
                            </i>
                        </button>
                    </div>

                </div>
                <img src='/search-Photo.gif' style={{ height: "400px", marginLeft: "420px", marginTop: "90px" }}></img>
            </div>

            <Footer />


        </div>
    )
}
export default Index