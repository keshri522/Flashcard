import React from "react";
import * as Yup from 'yup'

// here it defines the validation of all the inputs field throuht the Apllication
const ValidationSchema = Yup.object().shape({
    titleId: Yup.string(),
    titlename: Yup.string().min(3, "Name must be atlest 3 Characters!")
      .max(25, "Must be less than 25 characters")
      .required("Required!"),
    titledescription: Yup.string().min( 10,"Must be atleast 10 Characters").max(350, "Must be less than 300 characters!").required("Required!"),
    titleimg: Yup.mixed(),
  
    Card: Yup.array().of(
      Yup.object().shape({
        Cardid: Yup.string(),
        Cardname: Yup.string().min(5,"Must be atleast 5 Characters!")
          .max(20, "Must be less than 20 characters!"),
          
          Carddescription: Yup.string()
          .max(500, "Must be less than 500 characters!"),
          Cardimg:Yup.mixed()
      })
    ),
});

export default  ValidationSchema;