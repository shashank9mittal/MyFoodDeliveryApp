import useRestaurantList from "../services/useRestaurantList";

const Body = () => {
  const resList = useRestaurantList();

  console.log(resList);
  return (
    <div>
      <h1>Body Component</h1>
    </div>
  );
};

export default Body;
