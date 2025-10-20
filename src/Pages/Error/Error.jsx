import React from 'react';
import erro from "../../assets/error-404.png"
import { Link } from 'react-router';
const Error = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={erro} alt="" />
            </div>
            <div className='text-center '>
                <h1 className='text-4xl font-extrabold'> opps,Page not found!</h1>
                <p>The page you are looking is not avilable</p>
           
                 <Link className=' mt-6  bg-gradient-to-r from-blue-600 to-indigo-400 text-white  rounded-2xl' to={"/"}>Go Back!</Link>
              
            </div>
        </div>
    );
};

export default Error;