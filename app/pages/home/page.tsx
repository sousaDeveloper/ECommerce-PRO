import Categories from "@components/Categories/Categories";
import Header from "@components/Header/Header";
import Carousel from "@components/Carousel/Carousel";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Carousel />
      <Categories />
    </main>
  );
}
