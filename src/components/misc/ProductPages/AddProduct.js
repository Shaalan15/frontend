import React, { useState } from 'react';
import loginImg from '../Assets/login.png'
import '../Assets/style.scss'
import '../Assets/bg.css'
import { Link } from 'react-router-dom';
import {SubmitButtonSmall} from '../../registration/CommonItems';
import styled from 'styled-components';
import '../../mainPage/LandingItems/signUp/SignUp.css'

// RegEx (Regular Expressions)
const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
    return re.test(password);
}

function AddProduct() {

    // "initial", "sending", "successful", "unsuccessful", "validation error"
    const [state, setState] = useState("initial"); 
    const [errorsState, setErrorsState] = useState([]);

    // Declare undefined variables for later assignment (ref props)
    let titleField;
    let descriptionField;
    let priceField;
    let colorField;
    let productImageField;
    let associatedUsernameField;

    // To instantiate a FormData object
    const formData = new FormData();

    const attachFile = (evt) => {

        // Create an array for the files attached
        const files = Array.from(evt.target.files);

        // Append each file to the formData
        files.forEach(
            (file, index) => {
                formData.append(index, file);
            }
        )
    }

    const register = () => {

        const errors = [];

        // 1. Validate the fields
        if(titleField.value.length == 0) {
            errors.push("Please enter a title!");
        }
        if(descriptionField.value.length == 0) {
            errors.push("Please enter a description!");
        }
        if(priceField.value.length == 0) {
            errors.push("Please enter a price!");
        }
        if(colorField.value.length == 0) {
            errors.push("Please specify the main color of the piece!");
        }
        if(productImageField.value.length == 0) {
            errors.push("You cannot upload an emtpy product!");
        }
        if(associatedUsernameField.value.length == 0) {
            errors.push("Please enter an identifiable author name!");
        }
        

        // 1.1 If there are errors, set the state to "validation error"
        if(errors.length > 0) {
            setState("validation error");
            // Populate the alert box with the errors
            setErrorsState(errors);
        }
        // 1.2 If there are no errors, set the state to "sending"
        else {
            setState("sending");
            setErrorsState([]);

            formData.append('title', titleField.value);
            formData.append('description', descriptionField.value);
            formData.append('price', priceField.value);
            formData.append('color', colorField.value);
            formData.append('associatedUsername', associatedUsernameField.value);

            fetch(`${process.env.REACT_APP_API_ENDPOINT}/product/add`, {
                method: 'POST',
                //headers: {"Content-Type": "application/json"},
                body: formData
            })
            // 2.1 If the submission is successful, set the state "successful"
            .then((backendResponse)=> backendResponse.json())
            .then((theJson)=>{
                console.log(theJson);
                setState("successful");
            })
            // 2.2 If the submission is unsuccessful, set the state "unsuccessful"
            .catch((error)=>{
                console.log(error);
                setState("unsuccessful");
            });
        }
    }

    return (
        <div className="base-container">

        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label>Title</label>
              <input  
              ref={ (elem)=>titleField = elem } type="text" name="title" placeholder="What is my name?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Description">Description</label>
              <input  
              ref={ (elem)=>descriptionField = elem } type="text"  placeholder="Am I just a name :("
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input  
              ref={ (elem)=>priceField = elem } type="text"  placeholder="What's my worth..."
              />
            </div>
            <div className="form-group">
              <label>Color</label>
              <input  
              ref={ (elem)=>colorField = elem } type="text"  placeholder="I mean.."
              />
            </div>
            <div className="form-group">
              <label>Author Username</label>
              <input  
              ref={ (elem)=>associatedUsernameField = elem } type="text"  placeholder="Who is my father/mother/creator?"
              />
            </div>
            <div className="form-group">
              <label for="productImage" >Upload Product</label>
              <input  
              onChange={attachFile}
              ref={ (elem)=>productImageField = elem } type="file" accept=".png, .jpg, .jpeg, .svg"  placeholder="What do I look like?" id="productImage" aria-describedby="productImage"
              />
            </div>
          </div>
        </div>
            {
                state !== "sending" && state !== "successful" && 
                <div className="button">
                <button class="signButtonsmall" onClick={register}>SUBMIT!</button>
                </div>

            }

            { 
                state === "validation error" &&
                <div className="alert alert-danger" role="alert">
                   <ul>
                   {
                       errorsState.map(
                        (error) => <li>{error}</li>
                       )
                   }
                   </ul>
                </div>
            }

            {
                state === "successful" &&
                <div className="alert alert-success" role="alert">
                    Product added successfully!
                </div>
            }

            {
                state === "unsuccessful" &&
                <div className="alert alert-danger" role="alert">
                    Internal error. Please try again later.
                </div>
            }

            {
                state === "sending" &&
                <p>Loading...</p>
            }


        </div>
    )

};

export default AddProduct;