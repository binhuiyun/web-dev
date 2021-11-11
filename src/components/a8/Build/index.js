import React from "react";
import {Link, Route} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";
import '../../../index.css'
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";
import PostSummaryList from "./PostSummaryList";
import HomeScreen from "./HomeScreen";
import who from "../../../reducers/who";
import {Provider} from "react-redux";
import tweets from "../../../reducers/tweets";
import {combineReducers, createStore} from "redux";

const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);


const Build = () => {
    return(
        <Provider store={store}>
        <div>
            <Route path={["/", "/a7/twitter/home"]}
                   exact={true} component={HomeScreen}/>
            <Route path="/a7/twitter/explore"
                   exact={true} component={ExploreScreen}/>
            <Route path="/a7/twitter/profile"
                   exact={true} component={ProfileScreen}/>
        </div>
        </Provider>

    )
};


export default Build;
