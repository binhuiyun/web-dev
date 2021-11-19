import React from "react";
import {Link} from "react-router-dom";


const RegisterForm = () => {
    return(
        <>
                <div className="mt-20">
                <input placeholder="Username"
                       className="form-control "/></div>

                <input placeholder="Password"
                       className="form-control mt-4"/>

                <input placeholder="E-mail address"
                       className="form-control mt-4 mb-3"/>

                <label form="select-one-type" >
                    User type
                </label><br/>
                <select id="select-one-type">
                    <option value="User">User</option>
                    <option value="Author">Author</option>
                </select><br/>

                <button
                    className="btn btn-primary mt-3">
                    Sign up
                </button>

            <div className='text-secondary mt-2'>Have an account? <span className="ms-2"> <a href="#"> Sign in</a></span></div>


        </>
    )
}

export default RegisterForm;