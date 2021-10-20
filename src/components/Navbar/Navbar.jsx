import React from "react";
import { NavLink } from "react-router-dom";
import styleClasses from "./Navbar.module.css";
import FriendsListBar from "./FriendsListBar/FriendsListBar";

const Navbar = (props) => {
  const friendsListforNav = props.friendsList.map((friend) => (
    <FriendsListBar friendNameProp={friend.friendName} />
  ));

  return (
    <nav className={styleClasses.nav}>
      <div className={styleClasses.navItem}>
        <NavLink className={styleClasses.navLink} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={styleClasses.item}>
        <NavLink className={styleClasses.navLink} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={styleClasses.item}>
        <a>News</a>
      </div>
      <div className={styleClasses.item}>
        <a>Music</a>
      </div>
      <div className={styleClasses.item}>
        <a>Settings</a>
      </div>
      <div className={styleClasses.navFriendsList}>{friendsListforNav}</div>
    </nav>
  );
};

export default Navbar;
