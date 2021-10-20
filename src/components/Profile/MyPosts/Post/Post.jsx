import React from 'react'
import styleClasses from './Post.module.css'

export const Post = (props) => {
    return (
        <div>
        <div className={styleClasses.posts}>
            {props.post}
        </div>
        <span>
                Liked: {props.likes} times
            </span>
        </div>
    )
}
