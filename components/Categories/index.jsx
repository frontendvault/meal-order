import Category from "./Category";
import PickupLocations from "./PickupLocations";
import PriceRange from "./PriceRange";

const CategoriesSection = ({ category, filterCategories }) => {
  return (
    <div className="bg-gray-100  border p-5 rounded shadow-md mr-4 w-full md:w-[300px]">
      {/* <PriceRange /> */}
      <Category category={category} filterCategories={filterCategories} />
    </div>
  );
};

export default CategoriesSection;
