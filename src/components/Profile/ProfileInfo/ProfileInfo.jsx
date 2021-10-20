import React from "react";

import styleClasses from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div className={styleClasses.profileInfo}>
      <div className={styleClasses.profileImage}>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div>
      <div className={styleClasses.profileDescription}>
          ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
