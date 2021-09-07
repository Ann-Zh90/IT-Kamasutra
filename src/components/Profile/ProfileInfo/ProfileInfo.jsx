import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>
                <img src='https://cdn.jpegmini.com/user/images/bullet-1.jpg' width='100%' height='250px' alt=''/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=''/>
                <ProfileStatus status={'Hello!'}/>
            </div>
        </div>
    )

}
export default ProfileInfo