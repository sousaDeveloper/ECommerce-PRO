"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Aos from "aos";

// Utilities
import { fetchCategories } from "store/toolkit/categories/categories.slice";
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      Aos.init();
    }
  }, []);

  return (
    <>
      <h1
        className="font-bold text-2xl text-left pl-20 text-[#283040]"
        data-aos="fade-right"
        data-aos-duration="1000"
        id="variety"
      >
        Nossas variedades
      </h1>
      <div className="categories-container flex justify-center w-full h-full mt-1 px-20">
        <div className="categories-content grid min-h-[40rem] w-[1920px]">
          {categories.map((category) => (
            <div key={category.id}>
              <CategoryItem category={category} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
