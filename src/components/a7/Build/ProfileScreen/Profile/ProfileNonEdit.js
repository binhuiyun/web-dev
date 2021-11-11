import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './profile.css'
const ProfileNonEdit =(props) => {
    const owner = useSelector((state)=> state.profile)
    console.log(owner)
    const EditingMode = () => {
        props.setIsEdit(true)
    }
    return (
        <>
            <div className="row">
                <div className="col-2 mt-4 wd-arrow">
                    <i className="fas fa-arrow-left "/>
                </div>
                <div className="col-10">
                    <div className="fw-bold wd-font-25">{owner.name}</div>
                    <div className="text-secondary"> 5,196 Tweets</div>
                </div>
            </div>

            <div>
            <img className="img-fluid"
                src={owner['bannerPicture']}/>
                <div>
                <img className="wd-profile-img wd-avatar-image wd-border-radius-20px"
                     src={owner['profilePicture']}/>
                <button className="mt-2 rounded-pill btn btn-primary override-bs float-end wd-black"
                        onClick={() => EditingMode()}>Edit profile</button></div>
            </div>
            <div className="fw-bolder wd-font-25"> {owner.name}</div>
            <div className="text-secondary">@{owner.handle}</div>
            <div className="mt-3">{owner.bio}</div>
            <div className="mt-2 text-secondary">
                <i className="fas fa-map-marker-alt"/> {owner.location}
                <i className="fas fa-birthday-cake ms-4"/> Born {owner.dateOfBirth}
                <i className="far fa-calendar-alt ms-4"/> Joined {owner.dateJoined}
            </div>
            <div className="mt-2 mb-2">
                <span className="fw-bold wd-white-color"> {owner.followingCount}</span>  Following
                <span className="fw-bold ms-2 wd-white-color "> {owner.followersCount}</span>  Followers
            </div>


        </>
    )
}
export default ProfileNonEdit;