'use client';

import Link  from 'next/link';

export default function Profile() {

  return (
    <main>
      <h1>My list of Profiles</h1>
      <div>
        <ul>
          <Link href="/profile/1">Profile 1</Link> 
          <Link href="/profile/2">Profile 2</Link> 
          <Link href="/profile/3">Profile 3</Link> 
          <a href="/profile/4">Profile 4</a>
        </ul>
      </div>
    </main>
  )
}