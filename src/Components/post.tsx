import React from "react";

interface props {
    title: string;
    content: string;
  }

function Post(props: props) {
    return (
        <div className="post"> 
        {props.title}
        
        <div>{props.content}</div>
        </div>
    );
  }
  
  
  export default Post;