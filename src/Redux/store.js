import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import  MySlice  from "./mySlice";
const store=configureStore({
    reducer:{
        // here FlahsCard is A Global state for the entire application..
        FlahsCard:MySlice,
    },
})
export default store;