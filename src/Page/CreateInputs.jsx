import React, { useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEdit, faPlus,  faTrash, faUpload, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { SendFlahsCardtostore } from '../Redux/mySlice';
import ValidationSchema from '../Components/Validation/schema/validationschema';
import SocialIcons from '../Components/Sociaicons/socialIcons';
import "../App.css"
const CreateInputs = () => {
    // here this randomid is just for giving random number to diffrence between the contents of Applications.
    let randomid= new Date().toLocaleDateString();
    // This use State is just for storing image while uploads on ui ..
    const [titleimg, Settitleimg] = useState("");
    // This use Sate is jsut for rendering the image that is inside the Card object ... which is Card.cardimg
    const [Cardimg, SetCardimg] = useState("");
    // This use state is for adding style to first field to hover effects.
    let ImageRef = useRef(null)
    let focusref = useRef(null)
    let dispatch = useDispatch();
    // here  addingCardtoStore  when click on Generate Card it will take all the values of from using fromik Fields.
    let addingCardtoStore = (values, actions) => {
        // here we dipatch all the action  to store ...
        dispatch(SendFlahsCardtostore(values))
        //    once we clicked on Create then all the fields like input and image are set to isEmpty..
        actions.resetForm();
        Settitleimg("");
    }
    return (
        <>
            <Formik
                // These are initial Values of froms handle by Formik that will be changes later according to the user inputs..
                initialValues={{
                    // titleId: nanoid(),
                    titleId:randomid,
                    titlename: "",
                    titledescription: "",
                    titleimg: "",
                    Card: [{
                        // Cardid: nanoid(),
                        Cardid:randomid,
                        Cardname: "",
                        Carddescription: "",
                        Cardimg: ""
                    },],
                    //  Each time we Generate a flashcard it basically gives a uinque id which will be further use to Perform CRUD Operation easily.           
                    newid: new Date().toLocaleString(),

                }}
                // here onSubmit will automaatically add on fromik froms when we click Create Card it will add all the value to State of Store...
                onSubmit={addingCardtoStore}
                // here first its validtes the input from given by in yup library
                validationSchema={ValidationSchema}
            >
                {/* Here we simply destructiong the objects to take props value of Formik in order to use it. */}
                {({ values, isSubmitting, setFieldValue }) => (
                    <Form  >
                              {/* <div className='d-flex justify-content-end me-5 p-2'>
                                <Dark></Dark>
                              </div> */}
                        <div className=' mx-2'>
                            <div>
                                <h5 className='text-color '>Create Title<span className='m-1  colors'>*</span></h5>
                            </div>
                            <div className='row'>
                                <div className='col-md-4  '>
                                    <Field
                                        type="text"
                                        autoComplete="off"
                                        name="titlename"
                                        placeholder="Add your Title here...."
                                        className="form-control shadow-none border border-border-1 background"
                                    >
                                    </Field>
                                    {/* here if any erros then its shows */}
                                    <ErrorMessage name="titlename">
                                        {
                                            (errormsg) => <span className='error ' >{errormsg}</span>
                                        }
                                    </ErrorMessage>
                                </div>
                                <div className='col-md-3'>
                                    {/* Putting this upload to right of the UI        */}
                                    {titleimg ? (
                                        <div className='margin' >
                                            <img className='image-display'
                                                src={titleimg}
                                                alt="titleimg"
                                            ></img>
                                            <span
                                                onClick={() => {
                                                    Settitleimg('');
                                                }}
                                            //    This {faxmark} is just for removing image to upload again   
                                            >
                                                <FontAwesomeIcon className='text-danger' icon={faXmark}></FontAwesomeIcon>
                                            </span>
                                        </div>
                                    ) : (
                                        <div className='mb-2'>
                                            <button
                                                className='btns '
                                                type="button"
                                                onClick={() => ImageRef.current.click()}
                                            >
                                                <FontAwesomeIcon className='icon-style' icon={faUpload} ></FontAwesomeIcon>
                                                <span>Upload Image</span>
                                                <input type="file"
                                                    name=""
                                                    // here "image/* means accept all type of images"
                                                    accept="image/*,.pdf,.doc,.docs"
                                                    ref={ImageRef}
                                                    style={{ display: "none" }}
                                                    value={titleimg}
                                                    onChange={(event) => {
                                                        const file = event.target.files[0];
                                                        const reader = new FileReader();
                                                        reader.readAsDataURL(file)
                                                        reader.onload = () => {
                                                            setFieldValue("titleimg", reader.result);
                                                            Settitleimg(reader.result);
                                                        };
                                                    }}
                                                />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='m-2'>
                            <div>
                                <h5 className='text-color '> Add Notes <span className='m-1  colors'>*</span></h5>
                            </div>
                            <div className='col-md-7'>
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="titledescription"
                                    placeholder="Add your notes here....."
                                    className="form-control shadow-none border border-border-1 p-4  background"
                                >
                                </Field>
                                <ErrorMessage name="titledescription">
                                    {
                                        (errormsg) => <span className='error ' >{errormsg}</span>
                                    }
                                </ErrorMessage>
                            </div>
                        </div>

                        {/* NOW ADD Cards Section here.... */}
                        <div className='my-3' >
                            {/* Using FieldArray components for Creating Dynamic inputs when users clicked on Add more. */}
                            <FieldArray name="Card">
                                {(arrayHelper) => {
                                    const Card = values.Card;
                                    return (
                                        <div >
                                            {Card && Card.length > 0
                                                ? Card.map((Card, index) => (
                                                    <div key={index}    >
                                                        <div className=' row mx-2   shadow  border border-2 my-2  '>
                                                            <div className=' col-md-1 d-inline-block  font number m-3 fs-3 index  '>
                                                                {index + 1}
                                                                <span className='index'>.</span>
                                                            </div>
                                                            <div className='col-md-3 '>
                                                                <div>
                                                                    <h2 className="fs-6 mx-1 my-2 colors ">
                                                                        Add Card Title

                                                                    </h2>
                                                                </div>
                                                                <div  >
                                                                    <Field
                                                                        //    we use innerref={focusref} because when some click on update button our cursor basically foucs on Cardname input controlled by innerref.
                                                                        type="text"
                                                                        autoComplete="off"
                                                                        name={`Card.${index}.Cardname`}
                                                                        innerRef={focusref}
                                                                        className="form-control   shadow-none   background  "
                                                                        placeholder="Enter Card's Title..."
                                                                    />
                                                                    <ErrorMessage name={`Card.${index}.Cardname`}>
                                                                        {
                                                                            (errormsg) => <span className='error ' >{errormsg}</span>
                                                                        }
                                                                    </ErrorMessage>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-4  '>
                                                                <div>
                                                                    <h2 className='fs-6 mx-1 my-2 colors  '>
                                                                        Add About

                                                                    </h2>
                                                                </div>
                                                                <div>
                                                                    <Field
                                                                        autoComplete="off"
                                                                        as="textarea"
                                                                        name={`Card.${index}.Carddescription`}
                                                                        className="form-control shadow-none my-2 text-area background"
                                                                        placeholder="Enter Card's Description..."
                                                                    />
                                                                    <ErrorMessage name={`Card.${index}.Carddescription`}>
                                                                        {
                                                                            (errormsg) => <span className='error ' >{errormsg}</span>
                                                                        }
                                                                    </ErrorMessage>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-2 p-2 '>
                                                                {/* <div >
                                                    if our Card image is present then show a image that user selected here */}
                                                                {Card.Cardimg ? (
                                                                    <div className='margin' >
                                                                        <img className='images-display'
                                                                            // src={Cardimg}
                                                                            src={Card.Cardimg}
                                                                        ></img>
                                                                        <button className='Button'
                                                                            onClick={() => {
                                                                                // Here user clicked on  {famark} icon then Cardimg inside our Card object is set to empty..           
                                                                                setFieldValue(`Card.${index}.Cardimg`, "");
                                                                            }}
                                                                        //    This {faxmark} is just for removing image to upload again   
                                                                        >
                                                                            <FontAwesomeIcon className='text-color' icon={faXmark}></FontAwesomeIcon>
                                                                        </button>
                                                                    </div>
                                                                ) : (
                                                                    <div className=' my-3 ms-2 '>
                                                                        <input type="file"
                                                                            value={Card.Cardimg}
                                                                            accept="image/*,.pdf,.doc,.docs"
                                                                            onChange={(event) => {
                                                                                const file = event.target.files[0];
                                                                                const reader = new FileReader();
                                                                                reader.readAsDataURL(file)
                                                                                reader.onload = () => {
                                                                                    setFieldValue(`Card.${index}.Cardimg`, reader.result);
                                                                                    // setFieldValue( Cardimg, reader.result);\
                                                                                    SetCardimg(reader.result);
                                                                                };
                                                                            }}
                                                                        />
                                                                    </div>
                                                                )
                                                                }
                                                            </div>
                                                            <div className='col-md-1'>
                                                                <div className=' mx-3 my-1'>
                                                                    <button
                                                                        //   when user click on {faedit } the focus will go to Cardname input.                                                  
                                                                        type='button'
                                                                        onClick={() => focusref.current.focus()}
                                                                        className="Button"
                                                                    >
                                                                        <FontAwesomeIcon className='text-warning' icon={faEdit}></FontAwesomeIcon>
                                                                    </button>
                                                                </div>
                                                                <div className=' m-2'>
                                                                    <button
                                                                        //  {fatrash} is a button when clicked  it removed all the particular index input                                            
                                                                        type="button"
                                                                        onClick={() => arrayHelper.remove(index)}
                                                                        className="Button"
                                                                    >
                                                                        <FontAwesomeIcon className='text-danger' icon={faTrash}></FontAwesomeIcon>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )) : null}
                                            <div>
                                                <button type='button' className=' Button fs-6 mx-3'
                                                    //  this buttton will add new set of dynamic inputs when user clicked on it
                                                    onClick={() => arrayHelper.push({
                                                        // adding all the object inside our Card ..dynamically..
                                                        // Cardid: nanoid(),
                                                        Cardid:randomid,
                                                        Cardname: "",
                                                        Carddescription: "",
                                                        Cardimg: ""
                                                    })}
                                                >
                                                    <FontAwesomeIcon className='text-dark mx-1' icon={faPlus}></FontAwesomeIcon>
                                                    <span className='colors'>
                                                        Add More
                                                    </span>
                                                </button>

                                            </div>

                                            {/* here we add a check if Card.length>0 then only show Buttons ohterwise show null.. */}
                                            {Card && Card.length > 0 ? (
                                                <div className='  text-center p-4  '>
                                                    <button
                                                        //  this button basically prevents user to continue creating a Flashcard again and again until you Flash card is submitted your  create buttton will not work simply we use here debouncing                             
                                                        // disabled={isSubmitting}
                                                        type="submit"                                  
                                                        className='    create-button '
                                                        disabled={isSubmitting}
                                                    >
                                                        Click to Create
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            window.location.reload(true);
                                                        }}

                                                        type="button"
                                                       
                                                        className='   mx-3 my-2 refresh-button '
                                                    >
                                                        Click to Refresh
                                                    </button>
                                                </div>
                                            ) : (
                                                null
                                            )
                                            }
                                        </div>
                                    )
                                }}

                            </FieldArray>
                        </div>
                    </Form>
                )}
            </Formik>
            <div className='text-center'>
                <SocialIcons></SocialIcons>
            </div>
        </>

    );


};


export default CreateInputs;