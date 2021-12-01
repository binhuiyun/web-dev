import HelloWorld from "./HelloWorld";
import Practice from "./Practice";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./Build/HomeScreen";
import ExploreScreen from "./Build/ExploreScreen";

const A6 = () =>{

    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path={["/a6", "/a6/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a6/twitter/home" component={HomeScreen}/>
                <Route path="/a6/twitter/explore" component={ExploreScreen}/>
            </div>
        </BrowserRouter>

);
}
export default A6;