import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
      const link=  <>
      <li><Link to={'/'} >Home </Link> </li>
    <li><a href="#Products">Products</a></li>
    <li><a href="#aboutUs">About</a></li>
    <li><a href="#ContactUs">Contact Us </a></li>
      </>
    const {user,logOut}=useContext(AuthContext)
    const handelLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))
    }
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul  tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {link}
      </ul> 
      
    </div>
    <a className="btn btn-ghost text-xl">Buy Now</a>
  </div>
  <div className="navbar-center hidden lg:flex">

    <ul className="menu menu-horizontal px-1">
      {link}
      </ul> 

  </div>
  <div className="navbar-end gap-5">
    <img src={user?.photoURL} className="w-14 rounded-full" alt="" />
    {
        user?<>
        <button onClick={handelLogOut} className="btn">Log Out</button>
        </>:<>
        <Link to='/login' className="btn">Login</Link >
        </>
    }
    
  </div>
</div> 
        </div>
    );
};

export default Navbar;