import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  const cartItem = useSelector((store) => store?.cart?.items);
  // const cartItem = [];
  const setLoggedInUser = () => {
    loggedInUser ? setUserName("") : setUserName("Shashank Mittal");
  };
  return (
    <div className='sticky top-0 z-20 bg-slate-200'>
      <nav className='flex items-center justify-between flex-wrap py-6  container m-auto '>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <div className='text-4xl text-orange-500 font-bold'>
            <Link to='/'>Foodie</Link>
          </div>
        </div>
        <div className='block lg:hidden'>
          <button className='flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white'>
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className=' lg:flex lg:items-center '>
          <div className='font-semibold lg:flex-grow'>
            <span className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-6 cursor-pointer'>
              <Link to='/contact'>Contact Us</Link>
            </span>
            <span className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-6 cursor-pointer'>
              <Link to='/about'> About Us </Link>
            </span>
            <Link
              to='/cart'
              className='block mt-4 mr-6 lg:inline-block lg:mt-0 text-black hover:text-orange-500 cursor-pointer '
            >
              <span className=' bg-green-500 px-1 text-white hover:bg-orange-500 text-sm rounded-t-md mx-1'>
                {cartItem.length ? cartItem.length : 0}
              </span>
              <span className=''>Cart</span>
            </Link>

            <span
              className='inline-block cursor-pointer text-sm px-4 py-2  leading-none border rounded text-black border-orange-500 hover:border-transparent hover:text-orange-500 hover:bg-white mt-4 lg:mt-0'
              onClick={setLoggedInUser}
            >
              {loggedInUser ? "Logout" : "Login"}
            </span>
            {loggedInUser && (
              <span className='block mt-4 px-1 py-1 lg:inline-block lg:mt-0 text-orange-500 ml-6 border border-orange-500 rounded-full'>
                {loggedInUser
                  .split(" ")
                  .map((x) => x.charAt(0))
                  .join("")
                  .substr(0, 2)
                  .toUpperCase()}
              </span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
