import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Banner from "../components/Banner/Banner";
import WhyChoose from "../components/WhyChoose/WhyChoose";
// ✅ CORRECT
import ShopByBrand from "../components/ShopByBrand/ShopByBrand";
function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <ProductGrid />
      <Banner />
      <WhyChoose />
        <ShopByBrand />
    </>
  );
}

export default Home;