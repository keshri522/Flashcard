import React from 'react';
import "../App.css"
import { NavLink } from "react-router-dom";
import CreateInputs from './CreateInputs';

const Homepage = () => {
    return (
        <>
        
        <div className="container pt-3 background-color ">
                <CreateInputs></CreateInputs>
            </div>

        </>

    );
};

export default Homepage;