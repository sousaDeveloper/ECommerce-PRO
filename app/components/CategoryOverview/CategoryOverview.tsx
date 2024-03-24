import { useEffect, useState } from "react";

// Components
import ProductItem from "./ProductItem/ProductItem";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

// Utilities
import Category from "@typescategory.types";
import SkeletonLoading from "@componentsSkeletonLoading/SkeletonLoading";

interface ICategoryProps {
  category: Category;
  skeletonLoading?: boolean;
}

export default function CategoryOverview({ category, skeletonLoading }: ICategoryProps) {
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
    <section className="mt-0">
      <h1 className="font-bold text-3xl text-white mb-2 mt-9 px-10 animate__animated animate__fadeInRight">
        {category.displayName}
      </h1>
      {skeletonLoading ? (
        <div className="flex w-max space-x-4 p-4">
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-2 p-1 animate__animated animate__fadeInUp">
          {windowWidth <= 874 ? (
            <ScrollArea className="rounded-md">
              <div className="flex w-max space-x-4 p-4">
                {category.products.slice(0, 4).map((product) => (
                  <ProductItem product={product} key={product.id} />
                ))}
              </div>

              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          ) : (
            <div className="flex p-4 gap-4">
              {category.products.slice(0, 4).map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
