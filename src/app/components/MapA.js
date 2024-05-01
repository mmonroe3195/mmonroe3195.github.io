"use client";
import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

import {Popup, Marker } from 'react-leaflet'

// Dynamic import of react-leaflet components
const MapContainer = dynamic(
  () => import("react-leaflet").then((module) => module.MapContainer),
  {
    ssr: false, // Disable server-side rendering for this component
  }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((module) => module.TileLayer),
  {
    ssr: false,
  }
);
// const Marker = dynamic(
//   () => import("react-leaflet").then((module) => module.Marker),
//   {
//     ssr: false,
//   }
// );


const MapA = () => {
  return (
    <MapContainer
      center={[43.023258, -75.323431
      ]}
      zoom={10.5}
      style={{ width: "100%", height: "600px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[43.073102, -75.424048]} icon={new Icon({ iconUrl : 'https://png.pngtree.com/png-clipart/20230823/original/pngtree-location-pin-gps-pinned-track-picture-image_8230346.png', iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup className="h-[500px] w-[700px]">
            <h1>Local Farm With Cows</h1>
            <p>I often bike by this farm, and others near Hamilton&apos;s campus. These farms are being harmed by the changing climate.</p>
            <Link key= {"/locations/location-2"} href={"/locations/location-3"}>Click Here To Learn More</Link>
            <iframe width="600" height="400" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </Popup>
      </Marker>

      <Marker position={[43.043329, -75.403063]} icon={new Icon({ iconUrl : 'https://png.pngtree.com/png-clipart/20230823/original/pngtree-location-pin-gps-pinned-track-picture-image_8230346.png', iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup className="h-[500px] w-[700px]">
            <h1>Hamilton College</h1>
            <Link key= {"/locations/location-2"} href={"/locations/location-2"}>Click Here To Learn More</Link>
            <iframe width="600" height="400" src="https://www.youtube.com/embed/VygMfC8WWmI?si=_BL9Mt0Ng8PJSRtW"></iframe>
        </Popup>
      </Marker>
      <Marker position={[43.038460, -74.848669]} icon={new Icon({ iconUrl : 'https://png.pngtree.com/png-clipart/20230823/original/pngtree-location-pin-gps-pinned-track-picture-image_8230346.png', iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup className="h-[500px] w-[700px]">
            <h1>Little Falls- Erie Canal</h1>
            <p>While at Hamilton, I have taken trips to Little Falls by the Erie Canal around a dozen times. I&apos;ve also biked to the Erie Canal. I really enjoy this canal, but climate change has been causing flooding issues around it.</p>
            <Link key= {"/locations/location-2"} href={"/locations/location-4"}>Click Here To Learn More</Link>
            <iframe width="600" height="400" src="https://www.youtube.com/embed/Qg2xsKxhYGg?si=oUh2ijyUn5H7eiFn"></iframe>
        </Popup>
      </Marker>
      <Marker position={[42.971540, -75.431376]} icon={new Icon({ iconUrl : 'https://png.pngtree.com/png-clipart/20230823/original/pngtree-location-pin-gps-pinned-track-picture-image_8230346.png', iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup className="h-[500px] w-[700px]">
            <h1>Oriskany Creek</h1>
            <p>From bike rides with creek views to Hamilton orientation leader training on stream crossings in the creek, 
            I have spent a lot a time around the Oriskany Creek. However, the Oriskany Creek is causing issues for local residents due to climate change. 
            </p>
            <Link key= {"/locations/location-2"} href={"/locations/location-5"}>Click Here To Learn More</Link>
            <iframe width="600" height="400" src="https://www.youtube.com/embed/5NY4v4EYulk?si=hjP1KHK5rh1urNkb"></iframe>
        </Popup>
      </Marker>
    </MapContainer>
    
  );
};

export default MapA;