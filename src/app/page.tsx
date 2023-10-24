import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-2xl">Welcome to our page</div>
      <Link href="/about">Click here to learn about the developers!</Link>
      <Link href="/report">Click here to view a sample report!</Link>
    </main>
  );
}
