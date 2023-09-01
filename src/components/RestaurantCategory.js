import CategoryItems from "./CategoryItems";

const RestaurantCategory = ({
  category,
  expandCategory,
  collapseAccordion,
}) => {
  const { title } = category;
  function showCategortItem() {
    collapseAccordion();
  }
  return (
    <div className='my-4 p-4 w-full bg-gray-50 shadow-md '>
      <div
        className='flex justify-between cursor-pointer'
        onClick={showCategortItem}
      >
        <span className='font-bold'>{title}</span>
        {expandCategory ? <span>⌃</span> : <span>⌄</span>}
      </div>

      <div className=''>
        {expandCategory && (
          <CategoryItems items={category.itemCards}></CategoryItems>
        )}
      </div>
    </div>
  );
};
export default RestaurantCategory;
