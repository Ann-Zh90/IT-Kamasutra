import React from 'react';
import s from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src='https://cdn.jpegmini.com/user/images/bullet-1.jpg' width='100%' height='250px' alt=''/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo