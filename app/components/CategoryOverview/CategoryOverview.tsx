import { useEffect, useState } from "react";

// Components
import ProductItem from "./ProductItem/ProductItem";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

// Utilities
import Category from "@typescategory.types";

interface ICategoryProps {
  category: Category;
}

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
      <h1 className="font-bold text-3xl mb-2 mt-9 px-10 animate__animated animate__fadeInLeft text-[#8C3A60] text-start">
        {category.displayName}
      </h1>
      <div className="flex justify-center gap-2 p-1 animate__animated animate__fadeInUp">
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
