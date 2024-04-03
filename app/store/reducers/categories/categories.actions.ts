import { collection, getDocs } from "firebase/firestore";
import { Dispatch } from "redux";

// Utilities
import { categoryConverter } from "@converters/firestore.converters";
import Category from "@typescategory.types";
import { db } from "config/firebase.config";
import CategoriesActionTypes from "./categories.action-types";

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: CategoriesActionTypes.FETCH_CATEGORIES_START });

    try {
      const categoriesFromFirestore: Category[] = [];

      const querySnapshot = await getDocs(collection(db, "categories").withConverter(categoryConverter));

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data());
      });

      dispatch({ type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS, payload: categoriesFromFirestore });
      console.log({ categoriesFromFirestore });
    } catch (error) {
      dispatch({ type: CategoriesActionTypes.FETCH_CATEGORIES_FAILURE });
    }
  };
};
