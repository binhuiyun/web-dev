import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentProfile} from "../../../../services/ProfileService";

const ProfileEdit = (props) => {
    const owner = useSelector((state)=> state.profile)
    const [localProfile, setLocalProfile] = useState(owner);
    const handleNameChange = (event) =>{
        setLocalProfile({...localProfile, name: event.target.value})
    }
    const handleBioChange = (event) =>{
        setLocalProfile({...localProfile, bio: event.target.value})
    }
    const handleLocationChange = (event) =>{
        setLocalProfile({...localProfile, location: event.target.value})
    }
    const handleWebsiteChange = (event) =>{
        setLocalProfile({...localProfile, website: event.target.value})
    }
    const handleDobChange= (event) =>{
        setLocalProfile({...localProfile, dateOfBirth: event.target.value})
    }

    const dispatch = useDispatch();
    const save = () => {
        // dispatch({type: "update-profile",
        //     profile: localProfile})
        updateCurrentProfile(dispatch,localProfile)
        props.setIsEdit(false);
    }
    const exitEditingMode = () => {
        props.setIsEdit(false)
    }
    return(
        <>
            <button className="wd-black btn btn-primary close" onClick={() => exitEditingMode()}><i className="fas fa-times" /> </button>
            <span className="fw-bold wd-font-22 ms-4 wd-white-color"> Edit profile</span>
            <button className="float-end rounded-pill btn btn-primary override-bs wd-black"
            onClick={save}>Save</button>
            <div className="mt-3">
                <img className="img-fluid"
                     src={localProfile.bannerPicture}/>
                <div>
                    <img className="wd-profile-img wd-avatar-image wd-border-radius-20px"
                         src={localProfile.profilePicture}/>
                </div>
            </div>
            <ul className="list-unstyled wd-border ">
                <li className="ms-2 borderless text-secondary">
                    Name</li>
                <li>
                <input value={localProfile.name} onChange={handleNameChange}
                       className="form-control override ms-2"/></li>
        </ul>

            <ul className="list-unstyled wd-border mt-4">
                <li className="ms-2 borderless  text-secondary">
                    Bio</li>
                <li >
                    <form id = "textarea">
                        <textarea className ="wd-textarea ms-2" onChange={handleBioChange}>
                            {localProfile.bio}
                        </textarea>
                    </form></li>

            </ul>

        <ul className="list-unstyled wd-border mt-4">
        <li className="ms-2 borderless  text-secondary">
            Location</li>
        <li>
            <input value={localProfile.location} onChange={handleLocationChange}
                   className="form-control override ms-2"/></li>
        </ul>
            <ul className="list-unstyled wd-border mt-4">
                <li className="ms-2 borderless  text-secondary">
                    Website</li>
                <li>
            <input className="form-control override ms-2"
                   value ={localProfile.website} onChange={handleWebsiteChange}/></li>
            </ul>
            <div className="text-secondary">Birth date</div>
            <input type="date" className = "wd-dob mb-2" value={localProfile.dateOfBirth} onChange={handleDobChange}/>
        </>
)
}
export default ProfileEdit;

