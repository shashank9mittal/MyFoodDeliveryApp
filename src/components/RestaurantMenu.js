import { useParams } from "react-router-dom";
import useRestaurantMenu from "../services/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(0);

  if (resInfo === null) return <Shimmer></Shimmer>;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  function collapseAccordion(index) {
    if (index === showItems) {
      setShowItems(null);
    } else {
      setShowItems(index);
    }
  }

  return (
    <div className='container m-auto'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          category={category?.card?.card}
          expandCategory={index === showItems ? true : false}
          collapseAccordion={() => collapseAccordion(index)}
        ></RestaurantCategory>
      ))}
    </div>
  );
};
export default RestaurantMenu;
