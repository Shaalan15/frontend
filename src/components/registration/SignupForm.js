// Importing react
import React, { useState } from 'react';
// Importing the commons
import { MinorBoxContainer, FormContainer, SignupInput, MutedLink, SubmitButton } from './CommonItems';
// Importing link
import { Link } from 'react-router-dom';

// RegEx (Regular Expressions)
const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
    return re.test(password);
}

const validatePhoneNumber = (phoneNumber) => {
    const re = /[0-9]/;
    return re.test(phoneNumber);
}

function SignupForm(props) {
    
    // "initial", "sending", "successful", "unsuccessful", "validation error"
    const [state, setState] = useState("initial");
    const [errorsState, setErrorsState] = useState([]);

    // Declare undefined variables for later assignment (ref props)
    let avatarField;
    let usernameField;
    let passwordField;
    let firstNameField;
    let lastNameField;
    let emailField;
    let addressField;
    let phoneNumberField;

    // To instantiate a FormData object
    const formData = new FormData();

    // Function for attaching files for the avatar of the user
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
        if (usernameField.value.length == 0) {
            errors.push("Please enter a valid username");
        }
        if (!validatePassword(passwordField.value)) {
            errors.push("Please enter a valid password");
        }
        if (!validateEmail(emailField.value)) {
            errors.push("Please enter a valid email address");
        }
        if (!validatePhoneNumber(phoneNumberField.value)) {
            errors.push("Please enter a valid phone number");
        }

        // 1.1 If there are errors, set the state to "validation error"
        if(errors.length > 0){
            setState("validation error");
            // Populate the alert box with the errors
            setErrorsState(errors);
        }

        // 1.2 If there are no errors, set the state to "sending"
        else{
            setState("sending");
            setErrorsState([]);

            formData.append('userName', usernameField.value);
            formData.append('password', passwordField.value);
            formData.append('firstName', firstNameField.value);
            formData.append('lastName', lastNameField.value);
            formData.append('email', emailField.value);
            formData.append('phoneNumber', phoneNumberField.value);
            formData.append('address', addressField.value);

            fetch(`${process.env.REACT_APP_API_ENDPOINT}/user/add`, {
                method: `POST`,
                //headers: {"Content-Type": "application/json"},
                body: formData
            })

            //2.1 If submission successful, set state "successful"
            .then((backendResponse) => backendResponse.json())
            .then((theJson) => {
                console.log(theJson);
                setState("successful");
            })
            // 2.2 If the submission is unsuccessful, set the state "unsuccessful"
            .catch((error) => {
                console.log(error);
                setState("unsuccessful");
            });
        }
    
    }   

    const BoldLink = {
        fontSize: "12px",
        color: "#fff",
        fontWeight: "500",
        textDecoration: "none"
    };

    return (
        <MinorBoxContainer>
            
            <FormContainer>

                <SignupInput 
                onChange={attachFile}
                ref={(elem) => avatarField = elem} type="file" placeholder="Please choose an avatar" />
                <SignupInput ref={(elem) => usernameField = elem} type="text" placeholder="Most Powerful Alias (username)" />
                <SignupInput ref={(elem) => passwordField = elem} type="password" placeholder="Password" />
                <SignupInput ref={(elem) => firstNameField = elem} type="text" placeholder="First Name" />
                <SignupInput ref={(elem) => lastNameField = elem} type="text" placeholder="Last Name" />
                <SignupInput ref={(elem) => emailField = elem} type="email" placeholder="Email" />
                <SignupInput ref={(elem) => addressField = elem} type="text" placeholder="Address" />
                <SignupInput ref={(elem) => phoneNumberField = elem} type="text" placeholder="Phone Number" />

            </FormContainer>

            {
                state !== "sending" && state !== "successful" && 
                <SubmitButton onClick={register}
                type="submit" style={{ marginTop: "25px" }}>Signup</SubmitButton>
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
                    You have registered successfully!
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

            <MutedLink href="#">
                Already have an account? <Link to='/login' style={BoldLink}>Login</Link>
            </MutedLink>

        </MinorBoxContainer>
    )
}

export default SignupForm;