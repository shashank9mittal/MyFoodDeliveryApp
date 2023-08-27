import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RES_LIST_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState(null);

  useState(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(RES_LIST_URL);
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return (
    <div className='container mx-auto'>
      <div className='flex justify-end mx-8 my-4'>
        <input
          type='text'
          placeholder='Search...'
          className='px-4 py-2 rounded-l-md border focus:outline-none'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className='px-4 py-2 bg-orange-400 text-white rounded-r-md hover:bg-orange-500 focus:outline-none'
          onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setfilteredRestaurant(filteredRestaurant);
            setSearchText("");
          }}
        >
          Search
        </button>
      </div>

      <div className='flex flex-wrap'>
        {filteredRestaurant?.map((restaurant) => (
          <div key={restaurant?.info.id}>
            <RestaurantCard resData={restaurant?.info}></RestaurantCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
