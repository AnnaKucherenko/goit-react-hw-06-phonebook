import { configureStore } from "@reduxjs/toolkit";
import contacts from "./contacts";

export  const store = configureStore({
    reducer:{
        contacts,
    },
})


