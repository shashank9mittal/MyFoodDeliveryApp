import { useParams } from "react-router-dom";
import useRestaurantMenu from "../services/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer></Shimmer>;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div>
      {itemCards?.map((item) => (
        <div key={item?.card?.info?.id}>
          <h1>{item?.card?.info?.category}</h1>
        </div>
      ))}
    </div>
  );
};
export default RestaurantMenu;
