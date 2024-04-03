import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Utilities
import { fetchCategories } from "store/reducers/categories/categories.actions";
import { useAppSelector } from "hooks/redux.hooks";

// Components
import CategoryItem from "./CategoryItem/CategoryItem";

// Styles
import "./Categories.scss";

export default function Categories() {
  const { categories } = useAppSelector((rootReducer) => rootReducer.categoryReducer);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories() as any);
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
