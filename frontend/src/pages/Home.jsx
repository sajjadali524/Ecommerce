import BestSellersProducts from "../components/BestSellersProducts";
import HomeHero from "../components/HomeHero";
import LatestCollectionProducts from "../components/LatestCollectionProducts";
import Policy from "../components/Policy";

const Home = () => {
  return (
    <>
      <HomeHero />
      <LatestCollectionProducts />
      <BestSellersProducts />
      <Policy />
    </>
  )
}

export default Home;
