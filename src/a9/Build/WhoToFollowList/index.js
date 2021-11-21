import React, {useEffect} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllWho} from "../../services/whoService";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    const dispatch = useDispatch();
    useEffect(() => fetchAllWho(dispatch), []);

    return (
            <ul className="list-group">
              <li className="list-group-item ">
                    <strong>Who to follow</strong>
                </li>
           {
           who.map(who => {
           return(
             <WhoToFollowListItem who={who}/>
         );
     }
     )
 }

            </ul>
); }
export default WhoToFollowList;
