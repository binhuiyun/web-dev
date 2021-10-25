import React from "react";
import '../home.css'
const PostItem = (
    {
        post={
    "avatar": "https://pbs.twimg.com/profile_images/1442634650703237120/mXIcYtIs_400x400.jpg", "userName": "Elon musk",
    "handle":"@elonmusk","time": "23h",
    "title":" Amazing show about ",
    "titleEnd":"mission!",
    "image": "elon.jpg",
    "linkTitle":"Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    "linkContent":"From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space... ",
    "linkURL":"netflix.com",
    "comment":"4.2k",
    "titleLink":"https://twitter.com/inspiration4x",
    "tag": "@Inspiration4x",
    "retweet":"3.5k", "like":"37k"}
    }) => {
    return(
        <>
    <div className="row mt-2 ">
        <div className="col-1">
        <img src={post.avatar} className="avatar" />
            </div>
        <div className="col-11">
            <div className="row-in-line ps-2 "><strong>{post.userName}</strong>
            <span i className="fas fa-check-circle"/>
            <span className="wd-font-15 wd-link-color">{post.handle} <sup>.</sup> {post.time}</span>
            <span className="float-end wd-link-color wd-title-font">...</span>
            </div>

            <div className="ps-2">{post.title}<a href={post.linkTitle}>{post.tag}</a> {post.titleEnd}</div>

    {post.linkTitle !== null && post.linkTitle !== '' ?

    <div className="mt-2 card rounded-corner mb-2">
            <img src={post.image} className="img-fluid card-img wd-border-top-rounded"/>
        <div className="card-body bg-black wd-border-top wd-border-bottom-rounded">
        <h6 className="card-title" >{post.linkTitle} </h6>
        <div className="wd-link-color card-text">{post.linkContent} </div>
        <i className="fa fa-link wd-link-color"/>
        <span className="wd-font-13 wd-link-color">{post.linkURL}</span>
    </div>
    </div>

     :
    <div className="mt-2 card rounded-corner mb-2">
            <img src={post.image} className="img-fluid card-img rounded-corner"/>
        </div>
       }

    <div className="row mb-2">
        <div className="col-3 ">
        <a i className="fa fa-comment wd-link-color wd-padding-12 " href="comment.html">
            <span className="wd-padding-left-12">{post.comment}</span>
        </a></div>
        <div className = "col-3">
            <a i className="fa fa-retweet  wd-link-color wd-padding-12" href="retweet.html">
                <span className="wd-padding-left-12">{post.retweet}</span> </a>
        </div>
        <div className="col-3">
        <a i className="fa fa-heart wd-link-color wd-padding-12" href="like.html">
    <span className="wd-padding-left-12">{post.like}</span> </a>
    </div>
         <div className="col-3">
    <a i className="fa fa-share wd-link-color wd-padding-12" href="share.html"></a>
    </div>
         </div>
    </div>
    </div>
<hr/>
        </>

            );
}
export default PostItem;
