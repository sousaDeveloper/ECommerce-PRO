import Header from "@components/Header/Header";
import Carousel from "../../(routes)/home/_components/Carousel/Carousel";
import SlideContent from "../../(routes)/home/_components/SlideContent/SlideContent";
import Categories from "@components/Categories/Categories";
import ProductsWithDiscountOverview from "../../(routes)/home/_components/ProductsWithDiscountOverview/ProductsWithDiscountOverview";
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
