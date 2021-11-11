import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
// import profile from "../../../../../reducers/profile";

const ProfileEdit = (props) => {
    const owner = useSelector((state)=> state.profile)
    const [name, setName] = useState(owner.name);
    const [location, setLocation] = useState(owner.location);
    const [bio, setBio] = useState(owner.bio);
    const [website, setWebsite] = useState(owner.website);
    const [dateOfBirth, setDob] = useState(owner.dateOfBirth);
    const [bannerPicture, setBanner] = useState(owner['bannerPicture']);
    const [profilePicture, setProfile] = useState(owner['profilePicture']);
    const handle = owner.handle;
    const dateJoined = owner.dateJoined;
    const followingCount = owner.followingCount;
    const followersCount = owner.followersCount;



    const handleNameChange = (event)=>{
        const newName = event.target.value;
        setName(newName);
    }
    const handleLocationChange = (event) =>{
        const newLocation = event.target.value;
        setLocation(newLocation);

    }
    const handleBioChange = (event) => {
        const newBio = event.target.value;
        setBio(newBio);
    }
    const handleWebsiteChange = (event) => {
        const newWebsite = event.target.value;
        setWebsite(newWebsite);
    }
    const handleDobChange = (event) => {
        const newDob = event.target.value;
        setDob(newDob);
    }

    const dispatch = useDispatch();
    const saveProfile = () => {
        const newProfile = {
            name, location, bio, website, dateOfBirth, bannerPicture, profilePicture, handle, dateJoined,
            followingCount, followersCount
        }

        const action = {type: "update-profile", profile: newProfile}
        dispatch(action);
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
                onClick={() => saveProfile()}>Save</button>
            <div className="mt-3">
                <img className="img-fluid"
                     src={bannerPicture}/>
                <div>
                    <img className="wd-profile-img wd-avatar-image wd-border-radius-20px"
                         src={profilePicture}/>
                </div>
            </div>
            <ul className="list-unstyled wd-border ">
                <li className="ms-2 borderless text-secondary">
                    Name</li>
                <li>
                <input value={name} onChange={handleNameChange}
                       className="form-control override ms-2"/></li>
        </ul>

            <ul className="list-unstyled wd-border mt-4">
                <li className="ms-2 borderless  text-secondary">
                    Bio</li>
                <li >
                    <form id = "textarea">
                        <textarea className ="wd-textarea ms-2" onChange={handleBioChange}>
                            {bio}
                        </textarea>
                    </form></li>

            </ul>

        <ul className="list-unstyled wd-border mt-4">
        <li className="ms-2 borderless  text-secondary">
            Location</li>
        <li>
            <input value={location} onChange={handleLocationChange}
                   className="form-control override ms-2"/></li>
        </ul>
            <ul className="list-unstyled wd-border mt-4">
                <li className="ms-2 borderless  text-secondary">
                    Website</li>
                <li>
            <input className="form-control override ms-2"
                   value ={website} onChange={handleWebsiteChange}/></li>
            </ul>
            <div className="text-secondary">Birth date</div>
            <input type="date" className = "wd-dob mb-2" value={dateOfBirth} onChange={handleDobChange}/>
        </>
)
}
export default ProfileEdit;

