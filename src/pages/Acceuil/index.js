import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Headers/test'
import Sidebar from '../../components/Sidebar'
import { getAllCOURS, getCoursByTitle } from '../../actions/index';


import './index.css';
function Index() {

    const [titre, setTitre] = useState();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCOURS());
    }, [])

    //  dispatch(getCandidatByNom());
    const searchAgain = () => {
        if (titre == '') {
            dispatch(getAllCOURS());
        } else {
            dispatch(getCoursByTitle(titre));
        }
    };
    const cours = useSelector((state) => state.cours.cours);

    return (
        <div>
            <Header />
            <div className='sideBarSide' >
                <Sidebar />
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            <div className='RightSide'>
                <div className='search-bar' style={{ marginLeft: "600px", marginTop: "10px" }} >
                    <div className="searchBox" style={{ width: "500px", height: "30px" }}>
                        <input className="searchInput" type="text" name placeholder="chercher un cour..."
                            onKeyUp={searchAgain}
                            value={titre}
                            onChange={e => setTitre(e.target.value)}

                        />
                        <button className="searchButton" style={{ width: "5px" }} href="#">
                            <i class="fas fa-search"> </i>

                        </button>
                    </div>

                </div>
                <div className='coursPublic'>
                    {cours && cours.length > 0
                        ? cours.map((cour, index) => (
                            cour.typeC == "public" ?
                                <div className="cards">
                                    <div className="containerCards">
                                        <h4><b> {cour.cmt}</b></h4>
                                        <h2 style={{ marginLeft: "30px", marginTop: "70px" }}>{cour.titre}</h2>

                                    </div>
                                </div> : ' '
                        ))
                        : " "}
                </div>

            </div>



        </div>
    )
}
export default Index