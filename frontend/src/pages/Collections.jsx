import CollectionsProductsCard from "../components/CollectionsProductsCard";
import FilterCollections from "../components/FilterCollections";

const Collections = () => {
  return (
    <div className="lg:flex md:flex block gap-10 lg:px-32 px-3 ">
      <FilterCollections />
      <CollectionsProductsCard />
    </div>
  )
}

export default Collections;