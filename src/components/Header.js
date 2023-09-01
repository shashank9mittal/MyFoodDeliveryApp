import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap p-6 bg-slate-200 sticky top-0 z-20'>
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
        <div className='text-sm lg:flex-grow'>
          <span className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-4 cursor-pointer'>
            <Link to='/contact'>Contact Us</Link>
          </span>
          <span className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-4 cursor-pointer'>
            <Link to='/about'> About Us </Link>
          </span>
          <span className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-4 cursor-pointer'>
            Cart
          </span>
          <span className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-orange-500 hover:border-transparent hover:text-orange-500 hover:bg-white mt-4 lg:mt-0'>
            Login
          </span>
        </div>
        {/* <div class='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-500 hover:bg-white mt-4 lg:mt-0'>
          Login
        </div> */}
      </div>
    </nav>
  );
};
export default Header;
