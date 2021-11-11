import React, {useState} from "react";
import ProfileEdit from "./ProfileEdit";
import ProfileNonEdit from "./ProfileNonEdit";
const Profile = ()=> {

    const [isEdit, setIsEdit] = useState(false);

    return (
        <div>
            {isEdit ? <ProfileEdit setIsEdit={setIsEdit}/> : < ProfileNonEdit setIsEdit={setIsEdit}/>}
        </div>


    )
}

export default Profile;