import { IMG_URL } from "../utils/constants";

const CategoryItems = ({ items }) => {
  return (
    <div className='my-4'>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className='flex flex-wrap justify-between py-6 border-b'
        >
          <div className='w-9/12'>
            {item?.card?.info?.isBestseller ? (
              <span className='text-orange-400'>🏆 BestSeller</span>
            ) : (
              ""
            )}
            <div className='font-bold'>{item?.card?.info?.name}</div>
            <div>
              -₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
            <p className='font-light text-sm'>
              {item?.card?.info?.description}
            </p>
          </div>
          <div className=' w-3/12 p-4 relative flex justify-end'>
            <img
              className='w-28 rounded-lg'
              alt={item?.card?.info?.name}
              src={IMG_URL + item?.card?.info?.imageId}
            />
            <div className='absolute bottom-1 right-11'>
              <button className='px-4 py-2 text-xs rounded-sm bg-white shadow-md'>
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CategoryItems;
