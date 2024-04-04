import { categoryConverter } from "@convertersfirestore.converters";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Category from "@typescategory.types";
import { db } from "config/firebase.config";
import { collection, getDocs } from "firebase/firestore";

export const fetchCategories = createAsyncThunk("categories/fetch", async () => {
  const categoriesFromFirestore: Category[] = [];

  const querySnapshot = await getDocs(collection(db, "categories").withConverter(categoryConverter));

  querySnapshot.forEach((doc) => {
    categoriesFromFirestore.push(doc.data());
  });
  return categoriesFromFirestore;
});

interface InitialState {
  categories: Category[];
}

const initialState: InitialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
