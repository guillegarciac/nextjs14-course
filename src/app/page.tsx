'use client';

import Header from "@/components/Header";
import Logo from "@/components/Header/Logo";

export default function Home() {
  const name = 'world';
  return (
    <main>
      <Header name={name} age={35} isMan={true}>
        <p>A message from Home</p>
        <Logo />
      </Header>
      hello world from docker container
    </main>
  )
}
