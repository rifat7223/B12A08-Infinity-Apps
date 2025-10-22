import React from 'react';
import TrendingApp from '../TrendingApp/TrendingApp';
import { Link } from 'react-router';

const TrandingApps = ({data}) => {
    // console.log(data)
    return (
        <div>
            <div className='grid grid-cols-3 max-w-10/12 mx-auto gap-10 '>
       
            {
                data.map(appData=><TrendingApp key={appData.id} appData={appData}></TrendingApp>)
            }
        </div>
        <div className='text-center mt-5'>
           <Link className=' text-white text-2xl bg-gradient-to-r from-blue-600 to-indigo-400 p-2 ' to={"/apps"}>Show All</Link>
        </div>
        </div>
    );
};

export default TrandingApps;