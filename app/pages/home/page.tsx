import Header from "@components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import SlideContent from "./components/SlideContent/SlideContent";
import Categories from "@components/Categories/Categories";
import ProductsWithDiscountOverview from "./components/ProductsWithDiscountOverview/ProductsWithDiscountOverview";
import Footer from "@components/Footer/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Carousel />
      <SlideContent />
      <Categories />
      <ProductsWithDiscountOverview />
      <Footer />
    </main>
  );
}
