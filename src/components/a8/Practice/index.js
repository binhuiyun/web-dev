import React from "react";
import APIExamples from "./APIExamples";
import ReduxExamples from "./ReduxExamples/components";

import {Link} from "react-router-dom";


const Practice = () => {
    return(
        <>
            <h1>Practice</h1>

            <Link to="/a8/twitter/home">
                Build
            </Link>
            <APIExamples/>
            <ReduxExamples/>
        </>
    )
};


export default Practice;
