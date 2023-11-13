'use client';

import Header from "@/components/Header";

export default function Home() {
  const name = 'world';
  return (
    <main>
      <Header name={name} age={35} isMan={true}>
        <p>A message from Home</p>
      </Header>
      hello world from docker container
    </main>
  )
}
