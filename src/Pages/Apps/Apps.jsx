import React from 'react';
import { useLoaderData } from 'react-router';
import AllApps from '../../Components/AllApps/AllApps';
import Spiner from '../../Components/Spiner/Spiner';
import Search from '../../Components/Search/Search';

const Apps = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div>
           <div className='text-center '>
             <h1 className='text-3xl font-bold text-blue-500'>Our All Applications</h1>
             <p>Explore All Apps on the Market developed by us. We code for Millions</p>
           </div>
            <div className='flex justify-end'>
                <Search data={data}></Search>
            </div>
            <div className='grid grid-cols-3 max-w-10/12 mx-auto'>
                {
                    data.map(allData=><AllApps key={allData.id} allData={allData}></AllApps>)
                }
            </div>
              
        </div>
    );
};

export default Apps;