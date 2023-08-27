const Header = () => {
  return (
    <div className=' px-10 py-4 bg-slate-200 sticky top-0 z-10'>
      <div className='container mx-auto flex justify-between'>
        <div className='text-4xl text-orange-500 font-bold'>Foodie</div>
        <div className='flex'>
          <div className='mx-4 cursor-pointer'>Contact Us</div>
          <div className='mx-4 cursor-pointer'>About Us</div>
          <div className='mx-4 cursor-pointer'>Cart</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
