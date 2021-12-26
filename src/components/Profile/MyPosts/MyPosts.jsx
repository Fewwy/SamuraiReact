import React from 'react';

import styleClasses from './MyPosts.module.css';
import { Post } from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state/state';

const MyPosts = (props) => {
  const postsElements = props.posts.map((posts) => (
    <Post post={posts.postMessage} likes={posts.likes} />
  ));
  let newPostElement = React.createRef();

  const addPosts = () => {
    props.dispatch(addPostActionCreator())
  };

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch(updateNewPostTextActionCreator(text))
  }
  return (
    <div className={styleClasses.postsBlock}>
      <div>
        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}>

        </textarea>
      </div>
      <div>
        <button onClick={addPosts}>New post</button>
      </div>

      <div className={styleClasses.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
