const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-9">
                    <div class="wd-light-color">${post.topic}</div>
                    <div><Strong>${post.userName}</Strong>
                        <i class="fas fa-check-circle"></i>
                        <span class="wd-light-color"> ${post.time}</span>
                    </div>
                    <strong>${post.title}</strong>
                </div>
                <div class="col-3">
                    <img src=${post.image}
                        class="wd-logo">
                </div>
            </div>
        </li>
            `);
}
export default PostSummaryItem;