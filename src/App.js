import './vendors/bootstrap/bootstrap-5.1.1-dist/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/fontawesome-free-5.15.4-web/css/all.min.css';
import './App.css';
import Practice from "./components/a8/Practice";
// import Build from "./a9/Build"
import Build from "./components/a8/Build"
import {BrowserRouter, Link, Route} from "react-router-dom";
import A9 from "./a9";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Link to="/a8/practice">A8</Link> |
                <Link to="/a9/practice">A9</Link>
                <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
                    <Practice/>
                {/*<Route path={["/", "/a9", "/a9/practice"]} exact={true}>*/}
                {/*    <A9/>*/}
                </Route>
                <Route path="/a8/twitter">
                    <Build/>
                </Route>

            </div>
        </BrowserRouter>

    );
}


export default App;
