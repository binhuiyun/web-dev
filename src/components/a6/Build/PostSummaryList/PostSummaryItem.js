import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/react-blue.png"
        }
    }) => {

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-9">
                    <div className="wd-light-color">{post.topic}</div>
                    <div><strong>{post.userName}</strong>
                        <i className="fas fa-check-circle"/>
                        <span className="wd-light-color"> {post.time}</span>
                    </div>
                    <strong>{post.title}</strong>
                </div>
                <div className="col-3">
                    <img src={post.image}
                        className="wd-logo"/>
                </div>
            </div>
        </li>
            );
}
export default PostSummaryItem;