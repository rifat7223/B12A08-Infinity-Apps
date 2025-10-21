import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';

const TrendingApp = ({appData}) => {
    console.log(appData)
    const{image,title,description,downloads,ratingAvg}=appData
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm  transition duration-300 ease-in-out hover:scale-105 hover:shadow mt-10">
  <figure>
    <img className='w-50'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="flex justify-between">
    <div className='flex  bg-amber-100 p-1 text-green-400   transition duration-300 ease-in-out hover:scale-105 hover:shadow'>
        <ArrowDownToLine />
         <p> {downloads}</p>
    </div>
     <div className='flex bg-amber-100 text-amber-400 p-1 hover:bg-blue-40  transition duration-300 ease-in-out hover:scale-105 hover:shadow'>
        <Star />
        <p>{ratingAvg}</p>
     </div>
       
    
    </div>
  </div>
</div>

        </div>
    );
};

export default TrendingApp;