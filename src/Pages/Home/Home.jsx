import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../../Components/Banner/Banner';
import TrandingApps from '../../Components/TrandingApps/TrandingApps';


const Home = () => {
    const data=useLoaderData()
    // console.log(data)
    return (
        <div className='mt-10'>
           <Banner></Banner>
           <TrandingApps data={data}></TrandingApps>
          
        
        </div>
    );
};

export default Home;