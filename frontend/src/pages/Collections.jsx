import { useEffect, useState } from "react";
import CollectionsProductsCard from "../components/CollectionsProductsCard";
import FilterCollections from "../components/FilterCollections";
import axios from "axios";

const Collections = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const filterProducts = async() => {
      try {
        const query = new URLSearchParams({
          category,
          type,
          sort
        }).toString();
        const response = await axios.get(`http://localhost:8000/api/v1/product/filter-product?${query}`);
        console.log("filter: ", response.data.products)
        setProducts(response.data.products)
      } catch (error) {
        console.log(error)
      }
    }
    filterProducts();
  }, [category, type, sort]);

  return (
    <div className="lg:flex md:flex block gap-10 lg:px-32 px-3 ">
      <FilterCollections setCategory={setCategory} setType={setType} />
      <CollectionsProductsCard products={products} setSort={setSort} />
    </div>
  )
};

export default Collections;