import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";
import '../../../index.css'
import ExploreScreen from "./ExploreScreen";
import PostSummaryList from "./PostSummaryList";
import HomeScreen from "./HomeScreen";

const Build = () => {
    return(
        <>
            <ExploreScreen/>
            {/*<PostSummaryList/>*/}
            {/*<NavigationSidebar active="home"/>*/}
            {/*<WhoToFollowList/>*/}

            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
        </>
    )
};


export default Build;
