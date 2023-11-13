'use client';

import Header from "@/components/Header";
import Logo from "@/components/Header/Logo";
import Image from "next/image";
import background from "../../public/background.jpg";
import vercel from "../../public/vercel.svg";

export default function Home() {
  const name = 'world';
  return (
    <main>
      <Header name={name} age={35} isMan={true}>
        <p>A message from Home</p>
        <Logo />
      </Header>
      hello world from docker container
      <div /* className="w-[800px]" */>
        <Image quality= {100} src={background} alt="Background Logo" />
        <Image 
          src={vercel} 
          width={360}
          height={360}
          alt="vercel Logo"
        />
      </div>
    </main>
  )
}
