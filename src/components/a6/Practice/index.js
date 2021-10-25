import React from "react";
import Classes from "./Classes";
import {Link} from "react-router-dom";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";

const Practice = () => {
    return(
        <>
            <h1>Practice</h1>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/twitter/home">
                Build
            </Link>
        </>
    )
};


export default Practice;
