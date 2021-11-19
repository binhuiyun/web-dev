import React from "react";
import RegisterForm from "./RegisterForm";

const RegisterScreen = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-4">
                </div>
                <div className="col-4">
                    <RegisterForm/>
                </div>
                <div className="col-4">
                </div>
            </div>
        </>
    )
}

export default RegisterScreen;