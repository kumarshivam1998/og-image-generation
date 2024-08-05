import PostPreview from './PostPreview';
import React, { useState } from 'react';

function PostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  return (
    <div className="post-page">
      <h1>Create a Post</h1>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </form>
      <PostPreview title={title} content={content} image={image} />
    </div>
  );
}

export default PostPage;
