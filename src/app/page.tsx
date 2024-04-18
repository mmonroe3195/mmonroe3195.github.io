'use client'
import dynamic from "next/dynamic";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
const MapA = dynamic(() => import("./components/MapA"), { ssr: false });



export default function Home() {
  return (
      <div>
        <h1>Welcome to my page</h1>
        <p>testtest</p>
        <br/>
        <br/>
        
      <div className="position: absolute;"><MapA/></div>
      </div>

  );
}
