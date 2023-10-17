// ArticlePost.js
import React from 'react';

function ArticlePost() {
  return (
    <div className="article-post">
      <div className="centered-text">
        <p className="post-article-text">Post an Article</p>
      </div>
      <div className="row">
        <label htmlFor="articleTitle" className="bold-left">Title</label>
        <input type="text" id="articleTitle" placeholder="Enter a descriptive title" />
      </div>
      <div className="row">
        <label htmlFor="articleAbstract" className="bold-left">Abstract</label>
        <textarea id="articleAbstract" rows="4" placeholder="Enter a 1-paragraph abstract"></textarea>
      </div>
      <div className="row">
        <label htmlFor="articleText" className="bold-left">Article Text</label>
        <textarea id="articleText" rows="8" placeholder="Enter your article content"></textarea>
      </div>
      <div className="row">
        <label htmlFor="articleTags" className="bold-left">Tags</label>
        <input type="text" id="articleTags" placeholder="Please add up to 3 tags to describe what your article is about e.g., JavaScript" />
      </div>
      <button className="post-button">Post</button>
    </div>
  );
}

export default ArticlePost;
