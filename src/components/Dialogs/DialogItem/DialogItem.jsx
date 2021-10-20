import React from "react";
import { NavLink } from "react-router-dom";
import styleClasses from "./DialogItem.module.css";

const DialogItem = (props) => {
  let dialogUrlPath = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink
        className={styleClasses.dialogItems + " " + styleClasses.active}
        to={dialogUrlPath}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
