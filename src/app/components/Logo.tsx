import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/logo.png"
        width={40}
        height={50}
        alt="Image of Logo"
      />
      <Link href="/">
        <div className="text-2xl font-bold text-red-400 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
          Sri Sithanandha
           Stores
        </div>
      </Link>
    </div>
  )
}
