import React from "react";
import {likeTweet} from "../../../../../services/tweetService";

import {useDispatch} from "react-redux";

const TweetStats = ({tweet}) => {
    const dispatch = useDispatch();
    const likeClickHandler = () => {
        likeTweet(dispatch, tweet);
    };
    if(!tweet.stats) return null;
    return (
        <div className="row mt-2">
        <div className="col">
            <i className="far fa-comment me-2"/>
            {tweet.stats.comments}
        </div>
        <div className="col">
            <i className="fas fa-retweet me-2"></i>
            {tweet.stats.retweets}
        </div>
        <div className="col" onClick={likeClickHandler}>
            {
                tweet.liked &&
                <i className="fas fa-heart me-2"
                   style={{color: tweet.liked ? 'red': "white"}}></i>
            }
            {
                !tweet.liked &&
                <i className="far fa-heart me-2"></i>
            }
            {tweet.stats.likes}
        </div>
        <div className="col">
            <i className="fas fa-external-link-alt me-2"></i>
        </div>
    </div>
    )
}

export default TweetStats;