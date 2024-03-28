import ProductsWithDiscount from "@components/ProductsWithDiscount/ProductsWithDiscount";
import { CategoriesContext } from "@contexts/categories.context";
import { useContext, useEffect } from "react";

export default function ProductsWithDiscountOverview() {
  const { categories, fetchCategories } = useContext(CategoriesContext);

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, []);

  return (
    <section className="pt-0 sm:p-0">
      <ProductsWithDiscount categories={categories} />
    </section>
  );
}
