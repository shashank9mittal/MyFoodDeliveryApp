import { useEffect, useState } from "react";
import { resData } from "../utils/restaurantData";
import RestaurantCard, { topRated } from "./RestaurantCard";
import { RES_LIST_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([resData]);

  const [filteredRestaurant, setfilteredRestaurant] = useState(resData);

  const [searchText, setSearchText] = useState("");
  const TopRatedRestaurant = topRated(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(RES_LIST_URL);
    const json = await data.json();
    setListOfRestaurant(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return listOfRestaurant?.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className='container mx-auto'>
      <div className='flex justify-end my-4'>
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
              res?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
            );

            setfilteredRestaurant(filteredRestaurant);
            setSearchText("");
          }}
        >
          Search
        </button>
      </div>
      <div className='flex flex-wrap justify-between'>
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"restaurant/" + restaurant?.info?.id}
          >
            {restaurant?.info?.avgRating >= 4 ? (
              <TopRatedRestaurant
                resData={restaurant?.info}
              ></TopRatedRestaurant>
            ) : (
              <RestaurantCard resData={restaurant?.info}></RestaurantCard>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
