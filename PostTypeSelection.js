// PostTypeSelection.js
import React from 'react';
import { Form, Radio } from 'semantic-ui-react';

function PostTypeSelection({ postType, setPostType }) {
  return (
    <div className="post-type-selection">
      <div className="row">
        <label>Select Post Type:</label>
        <Form.Field>
          <Radio
            label="Question"
            value="question"
            checked={postType === 'question'}
            onChange={() => setPostType('question')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Article"
            value="article"
            checked={postType === 'article'}
            onChange={() => setPostType('article')}
          />
        </Form.Field>
      </div>
    </div>
  );
}

export default PostTypeSelection;
