import React from 'react';
/*import s from "./Profile.module.css"*/
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return <div>

        <div>
          <img src='https://cdn.jpegmini.com/user/images/bullet-1.jpg' width='100%' height='250px' alt='' />
        </div>

        <div>ava + description </div>
        <MyPosts />
      </div>
}

export default Profile