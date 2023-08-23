import { useEffect, useState } from "react";
import { RES_LIST_URL } from "../utils/constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(RES_LIST_URL);
    const json = await data.json();
    setRestaurantList(json);
  }
  return restaurantList;
};

export default useRestaurantList;
