import React from 'react';
import "../App.css"
import CreateInputs from './CreateInputs';
import Sharemodal from '../Components/Sociaicons/sharemodal';
const Homepage = () => {
    return (
        <>
            <div className="container pt-3 background-color ">
                <CreateInputs></CreateInputs>
                <div className="d-flex justify-content-end ">
                    <Sharemodal></Sharemodal>
                </div>
            </div>
           
        </>
    );
};

export default Homepage;