import Practice from "./Practice";
import Build from "./Build";
import {BrowserRouter, Route} from "react-router-dom";

const A8 = () =>{
    return (
        <BrowserRouter>
            <div className="container">
                <Route path={["/a8", "/a8/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a8/twitter" >
                    <Build/>
                </Route>
            </div>
        </BrowserRouter>
    );
}
export default A8;