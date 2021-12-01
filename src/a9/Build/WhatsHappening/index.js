import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {postNewTweet} from "../../services/tweetService";


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        const newTweet = {
            // _id: (new Date()).getTime() + '',
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "tweet": whatsHappening,
            "avatar-image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
            "logo-image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
        };
        postNewTweet(dispatch, newTweet)

    }

        return(
<>
    <table style={{marginBottom: '16px'}}>
        <tr>
            <td style={{verticalAlign: 'top'}}>
                <img src={'/images/avataricon.jpeg'}
                     className="rounded-circle"
                     style={{width: '48px', margin: '16px'}}/>
            </td>
            <td style={{width: "100%"}}>
                        <textarea value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
                                  className="form-control"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "black"}}
                                  placeholder="What's happening?"></textarea>
                <hr/>
                <span>
                            <a href="#"><i className="far fa-image me-3"></i></a>
                            <a href="#"><i className="fa fa-chart-line me-3"></i></a>
                            <a href="#"><i className="far fa-smile me-3"></i></a>
                            <a href="#"><i className="far fa-calendar me-3"></i></a>
                        </span>
                <button onClick={tweetClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                    Tweet
                </button>
            </td>
        </tr>
    </table>

</>
);
}
export default WhatsHappening;
