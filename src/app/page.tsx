"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Logo from "@/components/Header/Logo";
import Image from "next/image";
import background from "../../public/background.jpg";
import vercel from "../../public/vercel.svg";

export default function Home() {
  const name = "world";
  const [loading, setLoading] = useState(false);
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/users", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      if (response) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchHello = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      if (response) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Header name={name} age={35} isMan={true}>
        <p>A message from Home</p>
        <Logo />
      </Header>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchUsers}
      >
        Fetch All Users
      </button>
      <button
        className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={fetchHello}
      >
        Fetch Hello World
      </button>
      <p>hello world from docker container</p>
      <div /* className="w-[800px]" */>
        <Image quality={100} src={background} alt="Background Logo" />
        <Image src={vercel} width={360} height={360} alt="vercel Logo" />
      </div>
    </main>
  );
}
