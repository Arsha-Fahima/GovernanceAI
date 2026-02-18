"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) return null;

  return (
    <nav className='bg-white/90 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
        <div
          onClick={() => router.push("/gstinsight")}
          className='flex items-center gap-3 group cursor-pointer'
        >
          <div className='w-10 h-10 bg-[#1b69a1] rounded-xl flex items-center justify-center shadow-lg shadow-[#1b69a1]/20 group-hover:rotate-6 transition-all duration-500'>
            <span className='text-white font-black text-lg'>G</span>
          </div>
          <h1 className='text-xl font-black tracking-tighter text-slate-900'>
            GST<span className='text-[#1b69a1]'>Insight</span>
          </h1>
        </div>

        <div className='flex items-center gap-6'>
          <button
            onClick={() => router.push("/")}
            className='hidden sm:block text-xs font-black text-[#1b69a1] uppercase tracking-widest hover:text-[#155685] transition-colors'
          >
            Dashboard
          </button>
          <span className='hidden sm:block text-xs font-black text-slate-400 uppercase tracking-widest leading-none'>
            {session.user?.name}
          </span>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className='bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-[13px] hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 active:scale-95'
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
}
