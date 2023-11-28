import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-2xl">Welcome to our page</div>
      <br />
      <div>
        This is a site created for COCVAC to display reports created in Power BI
        using 911 call data from Oneida County. Please visit the
        <Link href="/report"> Report </Link>
        page to learn more!
      </div>
      <br />
      <img
        src="https://github.com/cocvac-hamilton2023/thesis_ui/blob/main/cocvac-hamilton-posed.jpg?raw=true"
        width={500}
        height={500}
        alt="Hamilton thesis students with COCVAC"
      />
      <br />
      <Link href="/about">
        Click here to learn about the developers and the project!
      </Link>
    </main>
  );
}
