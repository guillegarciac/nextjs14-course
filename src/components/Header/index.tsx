'use client';

import Logo from '@/components/Header/Logo';
import Menu from '@/components/Header/Menu';

export default function Header(props: any) {
  
  
  return (
    <header className="bg-white text-red-600 p-4 flex justify-between items-center">
      <Logo />
      <Menu {...props}/>
    </header>
  )
}