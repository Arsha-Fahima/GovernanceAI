"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  console.log(session?.user?.email);
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p className='text-center mt-10'>Loading...</p>;
  }

  return (
    <main className='min-h-screen flex items-center justify-center bg-gradient from-blue-50 to-indigo-100 px-4'>
      <div className='w-full max-w-md bg-white rounded-xl shadow-lg p-8'>
        <h1 className='text-3xl font-bold text-center mb-4'>Welcome Back</h1>

        <p className='text-gray-600 text-center mb-8'>
          Login to check your GST compliance
        </p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg'
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}
