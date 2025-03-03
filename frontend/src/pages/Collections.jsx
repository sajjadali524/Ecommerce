import { useEffect, useState } from "react";
import CollectionsProductsCard from "../components/CollectionsProductsCard";
import FilterCollections from "../components/FilterCollections";
import axios from "axios";

const Collections = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const filterProducts = async() => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/product/filter-product?category=${category}`);
        console.log("filter: ", response.data.products)
        setProducts(response.data.products)
      } catch (error) {
        console.log(error)
      }
    }
    filterProducts();
  }, [category]);

  return (
    <div className="lg:flex md:flex block gap-10 lg:px-32 px-3 ">
      <FilterCollections setCategory={setCategory} />
      <CollectionsProductsCard products={products} />
    </div>
  )
}

export default Collections;