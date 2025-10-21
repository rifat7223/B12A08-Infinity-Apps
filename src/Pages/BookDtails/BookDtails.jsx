import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import down from "../../assets/icon-downloads.png"
import rat from "../../assets/icon-ratings.png"
import { addStoreInstall } from '../../Utility/Install';
import Spiner from '../../Components/Spiner/Spiner';
const BookDtails = () => {
    const {id}=useParams()
   const BookStr=parseInt(id)
    const data=useLoaderData()
 
    const singleBook=data.find(book=>book.id==BookStr)
    console.log(singleBook)
    // console.log(data,id)
    const{image,title,description,downloads,ratingAvg,companyName}=singleBook;
    const [buttonText, setButtonText] = useState('Install now');
    
    const handleInstall=(id)=>{
           setButtonText('Instaled');
           alert("install")
        addStoreInstall(id)
    }
    return (
        <div className='m-15'>
            <div className='flex gap-10'>
                <div>
                    <img className='w-60 bg-white shadow' src={image} alt="" />
                </div>
                <div>
                    <div>
                    <h1 className='text-3xl font-bolds'>{title}</h1>
                    <p>Developed by{companyName}</p>
                </div>
                <div className='border-t-2 w-5xl m-2'></div>
              <div className='flex gap-10 mt-5'>
                  <div>
                    <img src={down} alt="" />
                    <p>downloads</p>
                    <p>{downloads}</p>
                    </div>
                <div>
                    <img className='' src={rat} alt="" />
                  <p>  ratings</p>
                    <p>{ratingAvg}</p></div>
              </div>
               <div className='mt-5'>
                <button onClick={()=>handleInstall(id)} className="btn btn-primary"> {buttonText}</button>
               </div>
                
                </div>
               
            </div>
             <div className='border-t-2 max-w-7xl'></div>
             <div>
                    <p>Descriptoon:{description}</p>
                </div>
              
        </div>
    );
};

export default BookDtails;