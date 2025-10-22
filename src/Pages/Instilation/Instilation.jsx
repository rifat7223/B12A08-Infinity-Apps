import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreInstall } from '../../Utility/Install';
import Installed from '../../Components/Installed/Installed';

const Instilation = () => {
  const  [instaled,setinstaled]=useState([]);
  const [sort,setsort]=useState("")
    const data= useLoaderData()
    console.log(data)
    useEffect(()=>{
        const storeInstallData=getStoreInstall()
        const convertedInstall=storeInstallData.map(id=>parseInt(id))
        const myInstall = data.filter(install=>convertedInstall.includes(install.id))
     setinstaled(myInstall)
    },[])

    const handleSort=(type)=>{
         setsort(type)
         if(type==="Low to High"){
            const sortByRatig=[...instaled].sort((a,b)=>a.ratingAvg-b.ratingAvg)
            setinstaled(sortByRatig)
         }
         if(type==="High to low"){
            const sortByRatig=[...instaled].sort((a,b)=>b.ratingAvg-a.ratingAvg)
            setinstaled(sortByRatig)
         }
    }
    return (
        <div className='max-w-10/12 mx-auto'>
           
            <div>
                <h1>Your installed apps</h1>
            </div>
             <div className="dropdown flex justify-end">
  <div tabIndex={0} role="button" className="btn m-1">Sort by ratings:{sort?sort:""}</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("Low to High")}>Low to High</a></li>
    <li><a onClick={()=>handleSort("High to low")}>High to low</a></li>
  </ul>
</div>
            <p>Install app:{instaled.length}</p>
           <div className='m-10'>
             {
                instaled.map(ins=><Installed key={ins.id } ins={ins}></Installed>)
            }
           </div>
        </div>
    );
};

export default Instilation;