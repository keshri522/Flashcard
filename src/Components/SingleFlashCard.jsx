
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import MyFlahsCard from "../Page/Myflashcard";
import Modal from 'react-bootstrap/Modal';
// here we passing props .. taking from My flashcard.
const SingleFlashCard = ({ FlashCard, deleteCard, index }) => {
   const [openModal, SetopenModal] = useState(false)
   let navigate = useNavigate();
   return (
      <>
         <div className="container cards my-4   " >
            <div
               key={FlashCard.titleId} className=" text-center  mx-2 my-4 " style={{ width: "15rem" }}>

               {FlashCard.titleimg ? (
                  <img className="image-display " src={FlashCard.titleimg} alt={FlashCard.titleimg}
                  />
               ) : (
                  <img className="image-display" src="https://cdn.britannica.com/05/94905-050-1830515C/Whirlpool-Galaxy-NGC-5195-Sc.jpg"
                     alt={FlashCard.titleimg}
                  />
               )
               }
               <div className="containers    text-center">

                  <h5 className=" font-weight-bold mt-2  cardtext ">
                     {FlashCard.titlename}
                  </h5>
                  <p className="cardtext  font text-wrap text-break badge">{FlashCard.titledescription}</p>
                  <p className="fs-5 cardtext size">{FlashCard.Card ? FlashCard.Card.length : 0} Cards </p>
               </div>
               <div className="  d-flex justify-content-around ">
                  <div className=" ">
                     <button onClick={() => {
                        // navigate("/FlashCardDetails",{state:{titlename:FlashCard.titlename,titledes:FlashCard.titledescription,
                        // titleimg:FlashCard.titleimg,titleId:FlashCard.titleId }})
                        navigate("/FlashCardDetails", { state: { data: FlashCard } })
                     }}
                        className=" btns   ">
                        Show Cards
                     </button>
                  </div>
                  <div>
                     <button
                        onClick={(() => {
                           SetopenModal(true);
                        })}
                        className=" btnss  "  >
                        Remove card
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <Modal  show={openModal}  >
            <Modal.Header  className="background"><h5 className="ms-5 cardtext">Do you want to Remove the Card </h5></Modal.Header>
            <Modal.Body  className="background"></Modal.Body>
            <Modal.Footer className="background" >
               <div className="d-flex">
                  <button
                     onClick={(() => {
                        deleteCard(index);
                        SetopenModal(false)
                     })}
                     className="btns mx-2">
                     Confirm
                  </button>
                  <button onClick={() => { SetopenModal(false) }} className="btnss mx-2">
                     Cancel
                  </button>
               </div>
            </Modal.Footer>
         </Modal>
      </>
   );
};
export default SingleFlashCard;