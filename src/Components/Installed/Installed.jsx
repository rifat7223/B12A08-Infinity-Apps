import React from 'react';

const Installed = ({ins}) => {
    console.log(ins)
    const {image,downloads,title,ratingAvg}=ins
    return (
        <div className=' bg-white shadow flex items-center justify-between  mt-5 p-5 '>
            <div className='flex items-center'>
            <div>
                <img className='w-20' src={image} alt="" />
            </div>
           <div>
             <p>{title}</p>
            <div>
                 <p> Dowmload:{downloads}</p>
             <p> Ratings:{ratingAvg}</p>
            </div>
           </div>

    
        </div>
        <div>
            <button class="btn btn-primary">Uninstall</button>
        </div>

        </div>
    );
};

export default Installed;