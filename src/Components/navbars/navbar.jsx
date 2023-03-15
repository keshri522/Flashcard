
import { NavLink } from "react-router-dom";
import React from 'react';
import Dark from "../Dark/darmode";
const Navbar = () => {
    return (
        <div>

            <div className="container ">
            
                <div className="col-md-12  ">
                    <h2 className='bg-lights text-center   py-2'  >FlashCard Generator </h2>
                    <div className='d-flex justify-content-end me-3  '>
                    <Dark></Dark>
                </div>
                </div>
                <div className='d-flex mt-1 '>
                    <div className='colors'>
                        <NavLink to={"/"}
                        >
                            Create New
                        </NavLink>
                    </div>
                    <div className='colors'>
                        <NavLink to={"/myflashcards"}
                        >
                            MyFlashCards
                        </NavLink>
                    </div>
                </div>

                <hr className='hr-style' />
                <div>
                    <label htmlFor=""></label>
                </div>

            </div>
        </div>
    );
};

export default Navbar;