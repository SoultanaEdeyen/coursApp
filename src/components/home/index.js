import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAdmin} from '../../actions/index';
import Header from '../Headers/test'
import Sidebar from '../Sidebar'
import Layout from '../layouts'; 
import Footer from '../Footers';

 function Index() {
  
  const dispatch = useDispatch();

  useEffect(() => {
   // dispatch(getAllAdmin());

  }, []);

  return (
    <div> 
       <Header/>
       <Sidebar/>
       <Footer/>
    </div>
  )
}
export default Index