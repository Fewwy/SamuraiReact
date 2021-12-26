import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styleClasses from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div className={styleClasses.content}>
      <ProfileInfo />
      <MyPosts
      posts={props.profilePage.posts}
      dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
