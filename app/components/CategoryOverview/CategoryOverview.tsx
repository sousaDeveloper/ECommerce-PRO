import { useEffect, useState } from "react";
import Aos from "aos";

// Components
import ProductItem from "./ProductItem/ProductItem";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

// Utilities
import Category from "@typescategory.types";

interface ICategoryProps {
  category: Category;
}

Aos.init();

export default function CategoryOverview({ category }: ICategoryProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderProductItems = () => {
    return category.products.slice(0, 4).map((product) => <ProductItem product={product} key={product.id} />);
  };

  return (
    <section>
      <h1 className="font-bold text-3xl mb-2 mt-9 px-10 text-[#283040] text-start" data-aos="fade-right">
        {category.displayName}
      </h1>
      <div className="flex justify-center gap-2 p-1" data-aos="fade-up">
        {windowWidth <= 874 ? (
          <ScrollArea className="rounded-md">
            <div className="flex w-max space-x-4 p-4">{renderProductItems()}</div>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        ) : (
          <div className="flex flex-wrap p-4 gap-6">{renderProductItems()}</div>
        )}
      </div>
    </section>
  );
}
