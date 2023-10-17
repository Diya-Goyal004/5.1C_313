// App.js
import React, { useState } from 'react';
import './App.css';

import PostTypeSelection from './PostTypeSelection';
import QuestionPost from './QuestionPost';
import ArticlePost from './ArticlePost';

function App() {
  const [postType, setPostType] = useState(null);

  return (
    <div className="App">
      <div className="header">
        <div className="post-text">New Post</div>
      </div>
      <div className="content">
        <div className="post-type-selection">
          <PostTypeSelection postType={postType} setPostType={setPostType} />
        </div>

        {postType === 'question' ? (
          <div className="grey-bar">
            <i>What do you want to ask or share?</i>
          </div>
        ) : postType === 'article' ? (
          <div className="grey-bar">
            <i>What do you want to ask or share?</i>
          </div>
        ) : null}

        {postType === 'question' ? (
          <QuestionPost />
        ) : postType === 'article' ? (
          <ArticlePost />
        ) : null}
      </div>
    </div>
  );
}

export default App;