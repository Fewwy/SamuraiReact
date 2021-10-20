import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styleClasses from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div className={styleClasses.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts}/>
    </div>
  );
};

export default Profile;
