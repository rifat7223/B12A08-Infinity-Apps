import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreInstall } from '../../Utility/Install';
import Installed from '../../Components/Installed/Installed';

const Instilation = () => {
  const  [instaled,setinstaled]=useState([])
    const data= useLoaderData()
    console.log(data)
    useEffect(()=>{
        const storeInstallData=getStoreInstall()
        const convertedInstall=storeInstallData.map(id=>parseInt(id))
        const myInstall = data.filter(install=>convertedInstall.includes(install.id))
     setinstaled(myInstall)
    },[])
    return (
        <div className='max-w-10/12 mx-auto'>
            <div>
                <h1>Your installed apps</h1>
            </div>
            <p>Install app:{instaled.length}</p>
            {
                instaled.map(ins=><Installed key={ins.id } ins={ins}></Installed>)
            }
        </div>
    );
};

export default Instilation;