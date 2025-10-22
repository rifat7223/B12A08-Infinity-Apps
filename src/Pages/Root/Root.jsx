import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Spiner from '../../Components/Spiner/Spiner';
import { ToastContainer } from 'react-toastify'; 
const Root = () => {
    const navigation= useNavigation()
    if(navigation.state==="loading") return <Spiner></Spiner>
    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
                <ToastContainer />
        </div>
    );
};

export default Root;