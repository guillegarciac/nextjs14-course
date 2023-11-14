'use client';

import { useState, useEffect } from 'react';

async function getData() {
  const res = await fetch('/api/posts', {cache: 'no-cache'});
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData()
      .then((response) => {
        setPosts(response.data); // Access the 'data' field for posts
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        // Optionally, handle the error state in the UI
      });
  }, []);
  
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </ul>
    </main>
  );
}
