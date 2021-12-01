import React, {useEffect, useState} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import findAllWho from "../../services/whoService";

const WhoToFollowList = () => {
    const [who, setWho] = useState([])
    useEffect(() =>
      findAllWho().then(who => setWho(who)));


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
