import Category from "@typescategory.types";
import ProductWithDiscount from "./ProductWithDiscount/ProductWithDiscount";
import { useEffect, useState } from "react";
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

  return (
    <>
      <h1 className="font-bold text-3xl mt-20 mb-4 animate__animated animate__fadeInLeft">Semana 20% OFF</h1>
      {windowWidth <= 785 ? (
        <ScrollArea className="rounded-md">
          <div className="flex w-max space-x-4 p-4">
            {categories.map((category) =>
              category.products.slice(1, 2).map((product) => <ProductWithDiscount product={product} key={product.id} />)
            )}
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ) : (
        <div className="mt-6 pb-9 bg-[#f2b6c1]">
          <div className="flex gap-4 flex-wrap justify-center">
            {categories.map((category) =>
              category.products.slice(1, 2).map((product) => <ProductWithDiscount product={product} key={product.id} />)
            )}
          </div>
        </div>
      )}
    </>
  );
}
