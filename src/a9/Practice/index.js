import React from "react";
import APIExamples from "./APIExamples";
import ReduxExamples from "./ReduxExamples/components";

import {Link} from "react-router-dom";
import Movies from "./Movies";


const Practice = () => {
    return(
        <>
            <h1>Practice</h1>
            <Link to="/a9/twitter/home">
                Build
            </Link>
            <Movies/>
        </>
    )
};


export default Practice;
