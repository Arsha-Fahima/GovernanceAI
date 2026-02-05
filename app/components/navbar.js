"use client";

import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  console.log(session?.user?.email);

  if (!session) return null;

  return (
    <nav className='flex items-center justify-between px-4 py-3 bg-white shadow'>
      <div className='font-semibold text-base'>GovernanceAI</div>

      <div className='flex items-center gap-4'>
        <span className='text-sm text-gray-600'>{session.user?.name}</span>

        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm'
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
