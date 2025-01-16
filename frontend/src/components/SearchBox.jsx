import { closebar, search } from "../constants/images";
import PropTypes from "prop-types";

const SearchBox = ({searchBoxClose}) => {
  return (
    <div className="px-32">
        <div className="flex items-center justify-center w-full bg-slate-100 py-10 mt-24 space-x-3">
          <div className="flex items-center bg-white w-1/3 border rounded-full px-3 py-2 ">
            <input
              type="text"
              placeholder="Search items"
              className="outline-none w-full rounded-full bg-transparent opacity-70"
            />
            <button>
              <img src={search} alt="image" className="w-6" />
            </button>
          </div>
          <img
            src={closebar}
            alt="image"
            className="w-5 cursor-pointer"
            onClick={() => searchBoxClose(false)}
          />
        </div>
      </div>
  )
};

SearchBox.propTypes = {
    searchBoxClose: PropTypes.bool
};

export default SearchBox;
