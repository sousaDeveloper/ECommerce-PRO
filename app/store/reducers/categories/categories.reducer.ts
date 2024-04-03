import Category from "@typescategory.types";
import CategoriesActionTypes from "./categories.action-types";

interface InitialState {
  categories: Category[];
}

const initialState: InitialState = {
  categories: [],
};

export default function categoryReducer(state = initialState, action: any): InitialState {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_START:
      return { ...state };
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload };
    case CategoriesActionTypes.FETCH_CATEGORIES_FAILURE:
      return { ...state };
    default:
      return state;
  }
}
