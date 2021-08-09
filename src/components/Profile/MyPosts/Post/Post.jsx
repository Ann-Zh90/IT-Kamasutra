import React from 'react';
import s from "./Post.module.css" 

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAMZoGzOlyQPey6yzArWy91zog3ScSMVecJQ&usqp=CAU' />
      {props.message}
      <div>
        <span>{props.likeCounter}</span>
      </div>
    </div>
  )
              
}

export default Post