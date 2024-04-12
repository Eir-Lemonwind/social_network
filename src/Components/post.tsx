import React from "react";

interface props {
    title: string;
    content: string;
  }

function Post(props: props) {
    return (
        <div className="post">
          <div className="post_title">{props.title}</div> 
        
        <div className="post_content">{props.content}</div>
        </div>
    );
  }
  
  
  export default Post;