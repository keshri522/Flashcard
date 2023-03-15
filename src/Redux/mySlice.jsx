import React, { useEffect } from 'react';
import "../App.css"
import {createSlice} from "@reduxjs/toolkit"
// here first it will check if any card is available  then show the card otherwise it simply return a empty string..
const getDataFromLocalStroage=()=>{
    let localData=localStorage.getItem("FlashCards");
    if(localData){
     return JSON.parse(localData)
    }
    else{
       return[]
    }
}
  const MySlice=createSlice({
    initialState:{
      Cards:getDataFromLocalStroage()
    },
    name:"FlahsCard",
    reducers:({
    //   it sendFlahsCardtoStore is a reducer which will basically push all the value to the Global State of an Application which is Store..
       SendFlahsCardtostore: (state,action)=>{
            // console.log(action);
// we are first return the intial value of Cards then add the value by payload..
        // here if our action =Update then add all the updates presented Cards..
            if(action && action.payload && action.payload.type=="update"){
              state.Cards=action.payload
             } else {
              if(state.Cards!==null){
                state.Cards.push(action.payload);
              }
              else{
                state.Cards=[action.payload]
              }
            }     
        //   
            // here After add all the values that we get from the Card Section to the State of the store we simply set all the values to localStorage.. to render the UI from the state of the store.
        localStorage.setItem("FlashCards",JSON.stringify(state.Cards));   
        } 
    }) 
})
// Here SendFlahsCardtostore is named export ..its defines the action so its is basically action create that why we use this
export  const {SendFlahsCardtostore} =MySlice.actions;
export default  MySlice.reducer;
