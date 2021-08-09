import React from 'react';
import s from "./MyPosts.module.css" 
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi! How are you?' likeCounter='15 &#x2764;'/>
        <Post message="It's my first post" likeCounter='24 &#x2764;'/>
        <Post />
      </div>
    </div>
  )
}

export default MyPosts