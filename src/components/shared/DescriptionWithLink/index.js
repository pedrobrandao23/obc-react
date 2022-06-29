import React from "react";


export default function DescriptionWithLink(props) {
    return (
      <>
        <p>{props.description}</p>
        <a href={props.link}>{props.link}</a>
      </>
    );
}