import { createStore } from "redux";
import rootReducer from "./root-reducer";

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
