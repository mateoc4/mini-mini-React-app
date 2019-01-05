import React from "react";

export default function CatRow(props) {
  let textColor = "black";
  if (!props.cat.likesKids) {
    textColor = "red";
  }

  return <li style={{ color: textColor }}>{props.cat.name}</li>;
}
