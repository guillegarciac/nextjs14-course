'use client';

import { useParams } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function PostID() {
  const searchParams = useSearchParams();
  
  const newParam = searchParams.get('new')
  console.log(newParam);
  
  return (
    <main>
      <h1>Post {newParam}</h1>
    </main>
  );
}