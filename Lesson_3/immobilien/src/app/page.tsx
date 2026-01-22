// import Link from "next/link";

import Counter from "@/components/counter/counter";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Home</h1>
        <Counter />

        {/* Можна так передавати кнопки! */}
        {/* <Link href="/about">Learn about us</Link> */}
        {/* <Link href="/career">Learn about us</Link> */}
      </main>
    </div>
  );
}

// Создайте страничку Career
// она должна открываться по пути /career

// на домашней страничке - сделайте кнопку
