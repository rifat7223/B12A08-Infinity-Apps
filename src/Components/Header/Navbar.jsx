import React from 'react';
import logo from "../../assets/logo.png"
import { Github } from 'lucide-react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      
        <Link to={"/"}>Home</Link>
        <Link to={"/Apps"}>Apps</Link>
          <Link to={"/install"}>Instilation</Link>
        
        

      </ul>
    </div>
    {/* navbar icone */}
    <div className='flex justify-center items-center  btn btn-ghost text-xl'>
       <div>
        <Link to={"/"}> <img className='w-10'  src={logo} alt="" /></Link>
        
       </div>
        <Link className='bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text' to={"/"}>Hero.Io</Link>
        
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-5">
       <Link to={"/"}>Home</Link>
        <Link to={"/Apps"}>Apps</Link>
        <Link to={"/install"}>Instilation</Link>
            
     
    </ul>
  </div>
  <div className="navbar-end">
    
   <Link className="btn bg-gradient-to-r from-blue-600 to-indigo-400 text-white" to={"https://lucide.dev/icons/github"}><Github /> Contribute</Link>
   
  </div>
</div>
        </div>
    );
};

export default Navbar;