"use client";

import Link from "next/link";

export default function Profile() {
  return (
    <main>
      <h1>My list of Profiles</h1>
      <div>
        <ul>
          <Link href="/profile/1">Profile 1</Link>
          <Link href="/profile/2">Profile 2</Link>
          <Link href="/profile/3">Profile 3</Link>
          <Link
            prefetch={true}
            href={{
              pathname: "/profile/4",
              query: {
                name: "Guille",
                userId: "4",
                person: JSON.stringify({
                  age: 18,
                }),
              },
            }}
          >
            Profile 4
          </Link>
        </ul>
      </div>
    </main>
  );
}
