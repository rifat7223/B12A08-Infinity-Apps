import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Spiner from '../../Components/Spiner/Spiner';

const Root = () => {
    const navigation= useNavigation()
    if(navigation.state==="loading") return <Spiner></Spiner>
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;