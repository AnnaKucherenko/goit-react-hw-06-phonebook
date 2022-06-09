import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import contactsReducer from "./contacts";

const rootReducer = combineReducers({
    contacts:contactsReducer,
});

const store = configureStore({
    reducer: rootReducer,
})

export default store;