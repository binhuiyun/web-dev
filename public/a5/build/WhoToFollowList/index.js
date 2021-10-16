import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
              <li class="list-group-item ">
                    <strong>Who to follow</strong>
                </li>
           ${ who.map(h =>{
                return(WhoToFollowListItem(h));
                }).join("")
                }
            </ul>
`); }
export default WhoToFollowList;
