"use client";

import { useState } from "react";
import { userService } from "../app/services/userService"; 

import Header from "@/components/Header";
import Logo from "@/components/Header/Logo";
import Image from "next/image";
import background from "../../public/background.jpg";
import vercel from "../../public/vercel.svg";

export default function Home() {
  const name = "world";
  const [loading, setLoading] = useState(false);

  const handleFetchUsers = async () => {
    try {
      setLoading(true);
      const data = await userService.fetchUsers();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchHello = async () => {
    try {
      setLoading(true);
      const data = await userService.fetchHello();
      console.log(data);
    } catch (error) {
      console.error(error);
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
        onClick={handleFetchUsers}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Fetch All Users'}
      </button>
      <button
        className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleFetchHello}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Fetch Hello World'}
      </button>
      <p>hello world from docker container</p>
      <div>
        <Image quality={100} src={background} alt="Background" priority />
        {/* <Image src={vercel} width={360} height={360} alt="Vercel Logo" /> */}
      </div>
    </main>
  );
}
