import React from 'react';
import ani from "../../assets/logo.png"
const Spiner = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="flex items-center gap-2">
                <span className='text-2xl'>L</span>
  <img className="box" src={ani} alt="loading" />
  <span className='text-2xl'>ading</span>
 
</div>

        </div>
    );
};

export default Spiner;