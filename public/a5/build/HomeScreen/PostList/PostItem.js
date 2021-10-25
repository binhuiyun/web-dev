const PostItem = (post) => {
    return(`
    <div class="row mt-2 ">
        <div class="col-1">
        <img src=${post.avatar} class="wd-avatar">
            </div>
        <div class="col-11">
            <div class="row-in-line ps-2 "><strong>${post.userName}</strong>
             <span i class="fas fa-check-circle "></i></span>
             <span class="wd-font-15 wd-link-color">${post.handle} <sup>.</sup> ${post.time}</span>
             <span class="float-end wd-link-color wd-title-font">...</span>     
            </div>
            
            <div class="ps-2">${post.title}</div>
      
    ${post.linkTitle !== null && post.linkTitle !== '' ?
    ` 
    <div class="mt-2 card rounded-corner mb-2">
            <img src=${post.image} class="img-fluid card-img wd-border-top-rounded">         
    <div class="card-body bg-black wd-border-top wd-border-bottom-rounded">  
        <h6 class="card-title" >${post.linkTitle} </h6>   
      <div class="wd-link-color card-text">${post.linkContent} </div>
        <i class="fa fa-link wd-link-color"></i>
        <span class="wd-font-13 wd-link-color">${post.linkURL}</span></div>` 
        :
        `<div class="mt-2 card rounded-corner mb-2">
        <img src=${post.image} class="img-fluid card-img rounded-corner">`
        }
   
      </div>

    <div class="row mb-2">
    <div class = "col-3 " >
    <a i class="fa fa-comment wd-link-color wd-padding-12 " href="comment.html">  <span class="wd-padding-left-12">${post.comment}</span> 
    </a> </div>
    <div class = "col-3">
    <a i class="fa fa-retweet  wd-link-color wd-padding-12" href="retweet.html">  <span class="wd-padding-left-12">${post.retweet}</span> </a>
    </div>
    <div class="col-3">
    <a i class="fa fa-heart wd-link-color wd-padding-12" href="like.html">   <span class="wd-padding-left-12">${post.like}</span> </a>
    </div>
    <div class="col-3">
    <a i class="fa fa-share wd-link-color wd-padding-12" href="share.html"></a>
    </div>
    </div>
    </div>
    <hr>
            `);
}
export default PostItem;