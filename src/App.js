import './vendors/bootstrap/bootstrap-5.1.1-dist/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/fontawesome-free-5.15.4-web/css/all.min.css';
import './App.css';
import Practice from "./a9/Practice";
import Build from "./a9/Build";
import {BrowserRouter, Link, Route} from "react-router-dom";
import A6 from "../src/components/a6";
import A7 from "./components/a7";
import A8 from "./components/a8";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Link to="/a6/practice">A6</Link>  |
                <Link to ="/a7/practice">A7</Link> |
                <Link to="/a8/practice">A8</Link> |
                <Link to="/a9/practice">A9</Link>
                <Route path={["/a6", "/a6/practice"]} exact={true}>
                    <A6/>
                </Route>
                <Route path={["/a7", "/a7/practice"]} exact={true}>
                    <A7/>
                </Route>
                <Route path={["/a8", "/a8/practice"]} exact={true}>
                    <A8/>
                </Route>

                <Route path="/a9/practice">
                    <Practice/>
                </Route>
                <Route path="/a9/twitter">
                    <Build/>
                </Route>

            </div>
        </BrowserRouter>


    );
}


export default App;
