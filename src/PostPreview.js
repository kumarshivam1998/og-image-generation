import React, { useEffect, useRef } from 'react';
import { toPng } from 'html-to-image';

function PostPreview({ title, content, image }) {
  const previewRef = useRef();

  useEffect(() => {
    if (previewRef.current) {
      toPng(previewRef.current, { width: 1200, height: 630 })
        .then((dataUrl) => {
          // Here you can upload the image to a server or set it as an og:image
          console.log(dataUrl);
        })
        .catch((error) => {
          console.error('Error generating image:', error);
        });
    }
  }, [title, content, image]);

  return (
    <div ref={previewRef} className="post-preview">
      <h2>{title}</h2>
      <p>{content}</p>
      {image && <img src={URL.createObjectURL(image)} alt="Post" />}
    </div>
  );
}

export default PostPreview;
