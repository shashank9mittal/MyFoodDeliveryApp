import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { removeItem } from "../store/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const deleteItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className='container m-auto w-6/12'>
      {cartItem.length === 0 ? (
        <div className='my-4 text-center'>
          <img
            alt='Empty Cart'
            className='m-auto'
            src={IMG_URL + "2xempty_cart_yfxml0"}
          />
          <div className='w-full m-4 text-lg font-bold'>Your Cart is Empty</div>
          <Link to='/'>
            <button className='px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 focus:outline-none'>
              Find Restaurant Near You
            </button>
          </Link>
        </div>
      ) : (
        <div>
          {cartItem.map((item, index) => (
            <div key={index}>
              <div className='my-4'>
                <div className='flex flex-wrap py-6 border-b'>
                  <div className='px-4 w-3/12 relative flex justify-end'>
                    <img
                      className='w-28 rounded-lg'
                      alt={item?.name}
                      src={IMG_URL + item?.imageId}
                    />
                  </div>
                  <div className='w-9/12'>
                    <div className='font-bold'>{item?.name}</div>
                    <p className='font-light text-sm'>{item?.description}</p>
                    <button
                      className='px-2 py-1 my-2 text-xs rounded-md bg-white shadow-sm border border-black'
                      onClick={() => {
                        deleteItem(item);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Cart;
