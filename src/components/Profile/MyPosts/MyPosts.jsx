import React from 'react'

import styleClasses from './MyPosts.module.css'
import { Post } from './Post/Post'


const MyPosts = (props) => {

  const postsElements = props.posts.map(posts => <Post post={posts.postName} likes={posts.likes} />)

    return (
        <div className={styleClasses.postsBlock}>
      <div>
        <textarea >

        </textarea>
      </div>
      <div>
      <button>New post</button>

      </div>

      <div className={styleClasses.posts}>
        {postsElements}
      </div>
    </div>
    )
}

export default MyPosts
