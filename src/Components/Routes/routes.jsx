import React from "react";
import { Route,Routes } from "react-router-dom";
import Homepage from "../../Page/Homepage";
import MyFlahsCard from "../../Page/Myflashcard";
import MyflashcardDetails from "../../Page/FlashCardDetails";
const Routers = () => {
    return (
        <div>
            <Routes>
            <Route  path="/"  element={<Homepage></Homepage>}></Route>
            <Route path="/myflashcards/" element={<MyFlahsCard></MyFlahsCard>}></Route>
            <Route path="/flashCardDetails/" element={<MyflashcardDetails></MyflashcardDetails>}></Route>
            </Routes>
        </div>
    );
};

export default Routers;