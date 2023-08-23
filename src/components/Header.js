const Header = () => {
  return (
    <div className='flex justify-between px-10 py-8 bg-slate-200 '>
      <div className='text-4xl'>Logo</div>
      <div className='flex'>
        <div className='mx-4 cursor-pointer'>Contact Us</div>
        <div className='mx-4 cursor-pointer'>About Us</div>
        <div className='mx-4 cursor-pointer'>Cart</div>
      </div>
    </div>
  );
};
export default Header;
