import { useContext, useEffect } from "react";

// Utilities
import { CategoriesContext } from "@contexts/categories.context";

// Components
import CategoryItem from "./CategoryItem/CategoryItem";

// Styles
import "./Categories.scss";

export default function Categories() {
  const { categories, fetchCategories } = useContext(CategoriesContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="categories-container flex justify-center w-full h-full mt-4 px-20">
      <div className="categories-content grid min-h-[40rem] w-[1920px]">
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
