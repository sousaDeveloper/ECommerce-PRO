import Header from "@components/Header/Header";
import Carousel from "../../(routes)/home/_components/Carousel/Carousel";
import SlideContent from "../../(routes)/home/_components/SlideContent/SlideContent";
import Categories from "@components/Categories/Categories";
import ProductsWithDiscountOverview from "../../(routes)/home/_components/ProductsWithDiscountOverview/ProductsWithDiscountOverview";
import Footer from "@components/Footer/Footer";
import SinceInova from "./_components/SinceInova/SinceInova";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Carousel />
      <SlideContent />
      <SinceInova />
      <Categories />
      <ProductsWithDiscountOverview />
      <Footer />
    </main>
  );
}
