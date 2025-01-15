const FilterCollections = () => {
  return (
    <div className="lg:w-1/4 md:w-1/4 w-full mt-32">
      <h1 className="font-semibold">FILTERS</h1>
      <form className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-2 lg:pt-9 md:pt-9 pt-5 lg:space-x-0 md:space-x-0 space-x-5  lg:space-y-5 md:space-y-5 space-y-0">
        <div className="w-full border border-slate-200 p-5 space-y-3">
          <h1 className="font-semibold">CATEGORIES</h1>
          <div className="flex items-center gap-2">
            <input type="checkbox" value="category" />
            <label className="text-[14px]">MEN</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" value="category" />
            <label className="text-[14px]">WOMEN</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" value="category" />
            <label className="text-[14px]">KIDS</label>
          </div>
        </div>

        <div className="border border-slate-200 p-5 space-y-3">
          <h1 className="font-semibold">TYPES</h1>
          <div className="flex items-center gap-2">
            <input type="checkbox" value="type" />
            <label className="text-[14px]">Topwear</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" value="type" />
            <label className="text-[14px]">Bottomwear</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" value="type" />
            <label className="text-[14px]">Winterwear</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterCollections;