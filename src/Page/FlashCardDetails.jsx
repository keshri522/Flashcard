
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
// import { useLocation } from "react-router";
import { useLocation } from "react-router-dom"
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Sharemodal from "../Components/Sociaicons/sharemodal";
const MyflashcardDetails = () => {
    // let FlahsCard = useSelector((state) => state.FlahsCard);
    // console.log(FlahsCard)
    // console.log(FlahsCard.Cards);
    const navigate = useNavigate();
    const location = useLocation();
    let find = location.state;
    console.log(find);
    return (
             <>
        <div className="container pt-3">
            <div className="col-md-12">
                <div className="background-color p-5">
                    <div className=" " >
                        <h3 className="title"><span className="left "
                          onClick={(()=>{
                              navigate(-1);
                          })}
                          >
                            <FontAwesomeIcon icon={faArrowLeftLong} />
                        </span>{find.data.titlename}</h3>
                    </div>
                    <div className="mx-3 my-2 ">
                        <p className="text-color text-wrap text-break ">{find.data.titledescription}</p>
                    </div>
                    <div className="mx-5 margin-top">
                        <h5 className="  text-secondary">MyCards</h5>

                    </div>

                    {/* here we mapping all the data which come from Singleflashcard on clicking a particular Cards. */}
                    {
                        find.data.Card.map((item, index) => {
                          
                            return (
                                
                                <div className="container" key={index}>
                                    <div className="row ">
                                        <hr className="hr-style" />
                                        <div className="col-md-3">
                                            <div className="mt-5 mx-5 text-color ">
                                                <h6>
                                                    {item.Cardname}
                                                </h6>
                                            </div>
                                        </div>
                                        {/* if image  is available the show if not then show a default image.. */}
                                        {item.Cardimg ? (
                                            <div className="col-md-3" >
                                                <img className="card-image my-2 " src={item.Cardimg} alt="Cardimg" />
                                            </div>
                                        ) : (
                                            <div className="col-md-3">
                                                <img className="card-image my-2" src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
                                                    alt="default" />
                                            </div>
                                        )}
                                        <div className="mt-2 para  col-md-6">
                                            <p className="text-color my-2  text-center text-break  " >{item.Carddescription}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
        <div className="text-center">
        <Sharemodal></Sharemodal>
        </div>
        </>
    );
}
export default MyflashcardDetails;

