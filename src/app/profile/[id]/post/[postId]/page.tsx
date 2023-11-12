'use client';


import { useParams, useRouter } from 'next/navigation'

export default function ProfileIdPostId() {
  const params = useParams();
  console.log(params.postId);
  return (
    <main>
      <h1>Profile id post id</h1>
      <p>hello world from docker container</p>
    </main>
  )
}