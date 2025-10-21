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
           
                <button>Go Back</button>
              
            </div>
        </div>
    );
};

export default Error;