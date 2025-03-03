import PropTypes from "prop-types";

const FilterCollections = ({setCategory}) => {
  const category = ["MEN", "WOMEN", "KIDS"];
  const types = ["Topwear", "Bottomwear", "Winterwear"];
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setCategory(checked ? value : ""); // Reset to "" to show all products if unchecked
  };

  return (
    <div className="lg:w-1/4 md:w-1/4 w-full mt-32">
      <h1 className="font-semibold">FILTERS</h1>
      <form className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-2 lg:pt-9 md:pt-9 pt-5 lg:space-x-0 md:space-x-0 space-x-5  lg:space-y-5 md:space-y-5 space-y-0">
        <div className="w-full border border-slate-200 p-5 space-y-3">
          <h1 className="font-semibold">CATEGORIES</h1>
          {
            category.map((category, index) => {
              return(
                <div key={index} className="flex items-center gap-2">
            <input type="checkbox" value={category.toLowerCase()} onChange={handleCheckboxChange} />
            <label className="text-[14px] opacity-80">{category}</label>
          </div>
              )
            })
          }

        </div>

        <div className="border border-slate-200 p-5 space-y-3">
          <h1 className="font-semibold">TYPES</h1>
          {
            types.map((type, index) => {
              return(
                <div key={index} className="flex items-center gap-2">
            <input type="checkbox" value="types" />
            <label className="text-[14px] opacity-80">{type}</label>
          </div>
              )
            })
          }
        </div>
      </form>
    </div>
  );
};

FilterCollections.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default FilterCollections;