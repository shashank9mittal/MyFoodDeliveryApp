import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className='flex flex-col justify-center  align-middle py-14'>
      <div className='text-4xl font-bold'>Error Occured!!</div>
      <div className=' font-bold'>{err.data}</div>
    </div>
  );
};

export default Error;
