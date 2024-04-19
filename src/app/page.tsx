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
      <p>This website was create for Professor Strongs climate change class. This project is intended to be a reflection about the local impacts of climate change near Hamilton College.</p>
      </main>
        <br/>
        <br/>
        <br/>
        
      <div className="position: absolute;"><MapA/></div>
      </div>

  );
}
