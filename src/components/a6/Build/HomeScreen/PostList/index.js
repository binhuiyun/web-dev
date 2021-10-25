import React from "react";
import PostItem from "./PostItem.js";
import post from "./post.json";


const PostList = () => {
    return (
            <ul className="list-group">
                {
                    post.map(post =>{
        return(<PostItem post={post}/>
                    );
    })
    }
            </ul>
); }

export default PostList;

