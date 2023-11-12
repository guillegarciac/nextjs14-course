'use client';
import Link  from 'next/link';
import { useParams } from 'next/navigation'

export default function ProfileId() {
  const params = useParams();

  console.log(params.id);
  return (
    <main>
      <div>
        <Link href="/profile">Back to Profiles</Link>
      </div>
      <h1>Profile Page id: {params.id}</h1>
    </main>
  )
}