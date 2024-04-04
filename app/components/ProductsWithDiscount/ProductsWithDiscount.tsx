"use client";

import { useEffect, useState } from "react";
import Aos from "aos";

// Utilities
import Category from "@typescategory.types";
import ProductWithDiscount from "./ProductWithDiscount/ProductWithDiscount";

// Components
import { ScrollArea, ScrollBar } from "@componentsui/scroll-area";

interface IProductsWithDiscountProps {
  categories: Category[];
}

export default function ProductsWithDiscount({ categories }: IProductsWithDiscountProps) {
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

  useEffect(() => {
    Aos.init();
  });

  const renderProductItems = () => {
    return categories.map((category) =>
      category.products.slice(1, 2).map((product) => <ProductWithDiscount product={product} key={product.id} />)
    );
  };

  return (
    <>
      <h1 className="font-bold text-3xl mt-20 mb-4 text-[#283040]" data-aos="fade-right" data-aos-duration="1000">
        Semana 20% OFF
      </h1>
      {windowWidth <= 785 ? (
        <ScrollArea className="rounded-md">
          <div className="flex w-max space-x-4 p-4">{renderProductItems()}</div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ) : (
        <div className="mt-6">
          <div className="flex gap-4 flex-wrap justify-center" data-aos="fade-up">
            {renderProductItems()}
          </div>
        </div>
      )}
    </>
  );
}
