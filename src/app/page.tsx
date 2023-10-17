import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-2xl">Welcome to our page</div>
      <br></br>
      {/* <h1>hello there</h1> */}
      {/* <p> To view the data below, log in with madmon@wjmxj.onmicrosoft.com</p> */}
      <div>Sample Report from Power BI:</div>
      {/* <iframe
        title="test of power query"
        width="1140"
        height="541.25"
        src="https://app.powerbi.com/reportEmbed?reportId=774d3287-1c3a-45ad-8152-d42d0c417a66&autoAuth=true&ctid=e4ca8b84-dade-4c5a-a7a0-df75f080a0b9"
      ></iframe> */}
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
