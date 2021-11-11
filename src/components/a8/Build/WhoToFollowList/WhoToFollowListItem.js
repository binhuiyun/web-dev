import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
}) => {
    return(
               <li className="list-group-item ">
                    <div className="row">
                        <div className="col-2">
                            <img src={who.avatarIcon} width='48'
                            className="rounded-circle"/>
                            </div>
                        <div className="col-6">
                            <div><strong>{who.userName}</strong>
                                <i className="fas fa-check-circle"/>
                            </div>
                                <div>{who.handle}</div>
                                </div>
                        <div className="col-4">
                            <button className="btn btn-primary rounded-pill float-end mt-1">Follow</button>
                        </div>
                    </div>
                    </li>
);
}
export default WhoToFollowListItem;
