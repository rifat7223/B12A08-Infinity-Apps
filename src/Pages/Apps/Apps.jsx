import React from 'react';
import { useLoaderData } from 'react-router';
import AllApps from '../../Components/AllApps/AllApps';
import Spiner from '../../Components/Spiner/Spiner';

const Apps = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div>
            <p>This is app section</p>
            <div className='grid grid-cols-3 max-w-10/12 mx-auto'>
                {
                    data.map(allData=><AllApps key={allData.id} allData={allData}></AllApps>)
                }
            </div>
              
        </div>
    );
};

export default Apps;