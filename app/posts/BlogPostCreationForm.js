'use client';

import React, { useState } from 'react';
import { addPost } from './addPost.telefunc'
import { config } from 'telefunc/client'
import { useRouter } from 'next/navigation';

export default function BlogPostCreationForm() {
  // Use the useState hook to store the title and content of the blog post in local state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();
  config.telefuncUrl = '/api/_telefunc';

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    addPost({title: title, content: content});

    // Clear the form fields
    setTitle('');
    setContent('');

    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={handleContentChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
