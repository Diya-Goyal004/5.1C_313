// QuestionPost.js
import React from 'react';

function QuestionPost() {
  return (
    <div className="question-post">
      <div className="centered-text">
        <p className="post-question-text">Post a question</p>
      </div>
      <div className="row">
        <label htmlFor="questionTitle" className="bold-left">Title</label>
        <input type="text" id="questionTitle" placeholder="Start your question with how, what, why, etc." />
      </div>
      <label htmlFor="problemDescription" className="bold-left">Describe your problem</label>
      <textarea id="problemDescription" rows="4" placeholder="Provide details about your problem" />
      <div className="row">
        <label htmlFor="tags" className="bold-left">Tags</label>
        <input type="text" id="tags" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" />
      </div>
      <button className="post-button">Post</button>
    </div>
  );
}

export default QuestionPost;
