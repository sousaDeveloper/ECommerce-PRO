"use client";

import { createContext, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { categoryConverter } from "../converters/firestore.converters";

// Utilities
import Category from "../types/category.types";
import { db } from "../config/firebase.config";

interface ICategoriesContext {
  categories: Category[];
  fetchCategories: () => Promise<void>;
}

export const CategoriesContext = createContext<ICategoriesContext>({
  categories: [],
  fetchCategories: () => Promise.resolve(),
});

export default function CategoriesContextProvider({ children }: any) {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = [];
      const querySnapshot = await getDocs(collection(db, "categories").withConverter(categoryConverter));

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data());
      });

      setCategories(categoriesFromFirestore);
    } catch (error) {
      console.log({ error });
    }
  };

  return <CategoriesContext.Provider value={{ categories, fetchCategories }}>{children}</CategoriesContext.Provider>;
}
