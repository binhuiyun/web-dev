const WhoToFollowListItem = (who) => {
    return(`
               <li class="list-group-item ">
                    <div class="row">
                        <div class="col-2">
                            <img src=${who.avatarIcon}
                            class="avatar">
                        </div>
                        <div class="col-6">
                            <div class="row">
                            <div><strong>${who.userName}</strong>
                                <i class="fas fa-check-circle"></i>
                            </div>
                                <div>${who.handle}</div>
                                </div>

                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary override-bs">Follow</button>
                        </div>
                    </div>
                    </li>
     
    `);
}
export default WhoToFollowListItem;
