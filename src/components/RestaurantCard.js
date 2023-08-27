import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, areaName } = resData;
  console.log(props);
  return (
    <div className='  my-4 mx-6 w-64 h-72 rounded-lg  bg-gray-100 cursor-pointer drop-shadow hover:bg-gray-200'>
      <div className='h-40 w-full rounded-t-lg bg-gradient-to-b from-zinc-50 to-zinc-600'>
        <img
          className='h-40 w-full object-cover  rounded-t-lg'
          alt={name}
          src={IMG_URL + resData.cloudinaryImageId}
        ></img>
      </div>
      <div className='p-4'>
        <div className='font-bold truncate'> {name} </div>
        <div className='font-bold'> ⭐️{avgRating}</div>
        <div className='truncate text-sm'>{cuisines.join(",")}</div>
        <div className='text-sm'>{areaName}</div>
      </div>
    </div>
  );
};
export default RestaurantCard;
