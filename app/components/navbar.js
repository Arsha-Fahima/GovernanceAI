"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <nav className='bg-white/90 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
        {/* Logo */}
        <div
          onClick={() => router.push("/gstinsight")}
          className='flex items-center gap-3 cursor-pointer group'
        >
          <div className='w-11 h-11 bg-[#1b69a1] rounded-xl flex items-center justify-center shadow-lg shadow-[#1b69a1]/20 group-hover:rotate-6 transition-all duration-500'>
            <span className='text-white font-black text-xl'>G</span>
          </div>
          <h1 className='text-2xl font-black tracking-tighter text-slate-900'>
            GST<span className='text-[#1b69a1]'>Insight</span>
          </h1>
        </div>

        <div className='hidden lg:flex gap-12 items-center'>
          {["Products", "API Docs", "Resources", "Enterprise"].map((item) => (
            <button
              key={item}
              className='font-bold text-[13px] uppercase tracking-widest text-slate-500 hover:text-[#1b69a1] transition-all relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#1b69a1] hover:after:w-full after:transition-all'
            >
              {item}
            </button>
          ))}
        </div>

        <div className='flex items-center gap-6'>
          {status === "authenticated" ? (
            <>
              <button
                onClick={() => router.push("/gstinsight")}
                className='text-slate-600 font-bold text-[14px] hover:text-[#1b69a1] transition-colors hidden sm:block'
              >
                Dashboard
              </button>
              <button
                onClick={() => router.push("/gstinsight")}
                className='text-[#1b69a1] font-black text-[12px] uppercase tracking-wider hover:text-[#155685] transition-colors hidden sm:block border-b-2 border-[#1b69a1]/20 pb-0.5'
              >
                Check Your Compliance
              </button>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className='bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-[14px] hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 active:scale-95'
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push("/login")}
                className='text-slate-600 font-bold text-[14px] hover:text-[#1b69a1] transition-colors hidden sm:block'
              >
                Log In
              </button>
              <button
                onClick={() => router.push("/login")}
                className='bg-[#1b69a1] text-white px-8 py-3 rounded-full font-bold text-[14px] hover:bg-[#155685] transition-all shadow-xl shadow-[#1b69a1]/20 active:scale-95'
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

/* Reusable Dropdown Wrapper */
function NavDropdown({ title, children }) {
  return (
    <div className='relative group'>
      <button className='flex items-center gap-1 hover:text-[#1b69a1] transition-colors'>
        {title}
        <svg
          className='w-4 h-4 transition-transform duration-300 group-hover:rotate-180'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      <div
        className='
        absolute left-1/2 -translate-x-1/2 top-full mt-4 w-64
        rounded-2xl bg-white/95 backdrop-blur-xl
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]
        border border-slate-100
        p-4
        opacity-0 invisible translate-y-4 scale-95
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100
        transition-all duration-300 ease-out
      '
      >
        {children}
      </div>
    </div>
  );
}

/* Dropdown Item */
function DropdownItem({ title, desc, href = "/" }) {
  return (
    <Link
      href={href}
      className='block p-3 rounded-xl hover:bg-slate-50 transition-all duration-200'
    >
      <p className='text-sm font-semibold text-slate-900'>{title}</p>
      <p className='text-xs text-slate-500'>{desc}</p>
    </Link>
  );
}
