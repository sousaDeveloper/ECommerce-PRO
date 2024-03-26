import Categories from "@components/Categories/Categories";
import Header from "@components/Header/Header";
import Carousel from "@components/Carousel/Carousel";
import SlideContent from "@components/SlideContent/SlideContent";
import ProductsWithDiscountOverview from "@componentsProductsWithDiscountOverview/ProductsWithDiscountOverview";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Carousel />
      <SlideContent />
      <Categories />
      <ProductsWithDiscountOverview />
    </main>
  );
}
