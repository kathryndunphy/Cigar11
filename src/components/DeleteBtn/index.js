import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
//but what are the props maaaaaannnnn
//this is the delete button we'll use everywhere on our app/site
//it's red so we are aware of the danger- respect
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
