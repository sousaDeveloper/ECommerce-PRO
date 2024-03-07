import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";

// Utilities
import Category from "../../types/category.types";
import { db } from "../../config/firebase.config";
import { categoryConverter } from "../../converters/firestore.converters";
import CategoryItem from "./Category-Item/Category-Item";

// Styles
import "./Categories.scss";

export default function Categories() {
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

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="categories-container flex justify-center w-full h-full p-5">
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
