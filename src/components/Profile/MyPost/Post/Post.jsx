import React from 'react';
import classes from'./Post.module.css';

const Post = (props) => {
  
  return (
    <div className={classes.post}>
      <img className={classes.miniavatar} src='../../img/avatar2700.jpg' alt='avatar'></img>
        <p>{props.message}</p>
      <div>
        <span>like: </span> {props.like}
      </div>
    </div>
  );//атрибут like, message идет с Mypost, для отрисовки нужно передать атрибут
}

export default Post;
