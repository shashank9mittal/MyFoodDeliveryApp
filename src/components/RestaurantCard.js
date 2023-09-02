import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, areaName, aggregatedDiscountInfoV3 } =
    resData;
  return (
    <div className='  my-4 w-64 h-72 rounded-lg  bg-gray-100 cursor-pointer drop-shadow hover:bg-gray-200'>
      <div className='h-40 w-full rounded-t-lg bg-gradient-to-b from-zinc-50 to-zinc-600 relative'>
        <img
          className='h-40 w-full object-cover  rounded-t-lg'
          alt={name}
          src={IMG_URL + resData.cloudinaryImageId}
        ></img>
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-zinc-950 opacity-85'>
          <div className='text-white font-bold mx-2 my-4 opacity-100'>
            {aggregatedDiscountInfoV3?.subHeader
              ? aggregatedDiscountInfoV3?.header +
                " " +
                aggregatedDiscountInfoV3?.subHeader
              : aggregatedDiscountInfoV3?.header}
          </div>
        </div>
      </div>
      <div className='p-4'>
        <div className='font-bold truncate'> {name} </div>
        <div className='font-semibold'>
          <span className='text-orange-500'>★</span>
          {avgRating}
        </div>
        <div className='truncate text-xs'>{cuisines.join(",")}</div>
        <div className='text-xs font-semibold'>{areaName}</div>
      </div>
    </div>
  );
};
export default RestaurantCard;

export const topRated = () => {
  return (props) => {
    return (
      <div className='relative'>
        <div className='absolute left-0 top-1 px-2 py-1 my-1 bg-orange-500 text-white font-bold text-xs z-10 rounded-r-sm'>
          Top Rated
        </div>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};
