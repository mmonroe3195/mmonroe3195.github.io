import Link from "next/link";

export default function locations() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 w-10/12 m-auto">
      <h1 className="text-4xl">Overview</h1>
      <br />
      
      <h2 className="text-2xl">Project Background Information</h2>
      <p>
        This project is mainly about the impacts of climate change near Hamilton College.
        Feel free to click the various locations on the dropdown to learn more about 
        different locations or watch the following video to learn about impacts directly on campus.
      </p>
      <br />
      <br />
      <h2 className="text-2xl">Video About Climate Change Impacts On Hamilton&apos;s Campus</h2>
      <br/>
      <br />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VygMfC8WWmI?si=_BL9Mt0Ng8PJSRtW"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <br />
    </main>
  );
}
