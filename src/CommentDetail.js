import React from "react"; //first import React library
import faker from 'faker';

//create a new component in the new file, paste the JSX into it
const CommentDetail = () => {
  //make a new function that's going to serve
  //as this CommentDetail component
  return (  
    //JSX
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice Blog Post!</div>
      </div>
    </div>
  );
};

export default CommentDetail;
