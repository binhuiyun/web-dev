import PostItem from "./PostItem.js";
import post from "./post.js";


const PostList = (p) => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
           ${post.map(p =>{
        return(PostItem(p));
    }).join("")
    }
            </ul>
`); }

export default PostList;

