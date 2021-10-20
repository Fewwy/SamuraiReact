import React from 'react'
import styleClasses from './FriendListBar.module.css'

const FriendsListBar = (props) => {
    return (
        <div className={styleClasses.friendListBarContainer}>
            <div className={styleClasses.friendListBarSingleItem}>
            {props.friendNameProp}
            </div>
        </div>
    )
}

export default FriendsListBar;