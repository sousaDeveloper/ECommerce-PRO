import Categories from "@components/Categories/Categories";
import Header from "@components/Header/Header";
import Carousel from "@components/Carousel/Carousel";
import SlideContent from "@components/SlideContent/SlideContent";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Carousel />
      <SlideContent />
      <Categories />
    </main>
  );
}
