import React from 'react';
import { Link } from 'react-router';
import bannerImg from "../../assets/hero.png"
const Banner = () => {
    return (
        <div className='text-center'>
            <div>
                {/* description */}
                <div >
               <div className='text-5xl font-bold'>
                 <h1>We build <br /><span className='bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text'>Productive</span> Apps</h1>
               </div>
                <p>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            {/* button */}
            <div className='flex gap-5 items-center justify-center m-5'>
                
                <button className="btn btn-primary"> <Link to={"https://play.google.com/store/games?hl=en"}>Google Play</Link></button>
                <button className="btn btn-primary">  <Link>App Store</Link></button>
               
               
                
            </div>
            {/* banner image */}
            <div className='flex items-center justify-center'>
                <img src={bannerImg} alt="" />
            </div>
            </div>
            <div className='bg-gradient-to-r from-blue-600 to-indigo-400 p-5 md:p-10  '>
              <h1 className='text-white font-bold text-2xl md:text-4xl'>Trusted by Millions, Built for You</h1>
              {/* trusted */}
              <div className=' md:flex  justify-center items-center gap-10 mt-5 md:mt-15'>
                <div>
                    <p className='text-white'>Total Downloads</p>
                    <h1 className='text-white text-3xl '>29.6M</h1>
                    <p className='text-white'>21% more than last month</p>
                </div>
                <div>
                    <p className='text-white'>Total Reviews</p>
                    <h1 className='text-white text-3xl '>960K</h1>
                    <p className='text-white'>31 more will Launch</p>
                </div>
                <div>
                    <p className='text-white'>Active Apps</p>
                    <h1 className='text-white text-3xl '>202K</h1>
                    <p className='text-white'>46% more than last month</p>
                </div>
                
              </div>
            </div>
        </div>
    );
};

export default Banner;