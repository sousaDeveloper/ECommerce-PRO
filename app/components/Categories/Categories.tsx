import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";

// Utilities
import Category from "../../types/category.types";

// Styles
import "./Categories.scss";
import { db } from "../../config/firebase.config";
import { categoryConverter } from "../../converters/firestore.converters";

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
    <div className="categories-container">
      <div className="categories-content">
        {/* {categories.map((category) => {

        })} */}
      </div>
    </div>
  );
}
