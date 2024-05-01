'use client'
import dynamic from "next/dynamic";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
const MapA = dynamic(() => import("./components/MapA"), { ssr: false });



export default function Home() {
  return (
      <div>
        <br></br>
        <main className="m-auto space-y-4 text-center">
      <div className="text-2xl font-bold">
        Welcome to my website!
      </div>
      <p>This website was created for Professor Strong&apos;s climate change class. This project is intended to be a reflection about the local impacts of climate change near Hamilton College.
      </p>
      <br/>
      <p>The map displayed below is interactive! Click the red pins to learn more about local areas.
        You are also able to zoom in/ out and drag to move around the map similarly to how you can do so on Google Maps.</p>
      </main>
        <br/>
        <div className="position: absolute;"><MapA/></div>
      </div>

  );
}
