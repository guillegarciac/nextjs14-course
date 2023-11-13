'use client';

import Header from "@/components/Header";

export default function Home() {
  const name = 'world';
  return (
    <main>
      <Header name={name} age={35} isMan={true}/>
      hello world from docker container
    </main>
  )
}
