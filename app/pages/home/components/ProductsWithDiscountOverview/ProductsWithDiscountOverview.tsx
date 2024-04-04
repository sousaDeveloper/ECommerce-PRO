import { useEffect } from "react";
import { useDispatch } from "react-redux";

//Utilities
import { fetchCategories } from "store/toolkit/categories/categories.slice";
import { useAppSelector } from "hooks/redux.hooks";

// Components
import ProductsWithDiscount from "@components/ProductsWithDiscount/ProductsWithDiscount";

export default function ProductsWithDiscountOverview() {
  const { categories } = useAppSelector((rootReducer) => rootReducer.categoryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories() as any);
    }
  }, []);

  return (
    <section className="pt-0 sm:p-0">
      <ProductsWithDiscount categories={categories} />
    </section>
  );
}
