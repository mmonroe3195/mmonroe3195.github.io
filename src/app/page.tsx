import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-2xl">Welcome to our page</div>
      <br></br>
      <div>Sample Report from Power BI:</div>
      <iframe
        title="COCVAC_Report"
        width="1140"
        height="541.25"
        src="https://app.powerbi.com/reportEmbed?reportId=bd85bfd8-e1b3-46bb-a722-c60e21738268&autoAuth=true&ctid=f9ea7f3e-de28-46d1-b63d-91d3086fff91"
      ></iframe>
      <Link href="/about">
        Click here to see what we are looking to include!
      </Link>
    </main>
  );
}
