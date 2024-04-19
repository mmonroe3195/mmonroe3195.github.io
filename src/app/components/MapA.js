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
      center={[43.050546, -75.407347]}
      zoom={8}
      style={{ width: "100%", height: "600px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[43.050546, -75.407347]} icon={new Icon({ iconUrl : 'https://png.pngtree.com/png-clipart/20230823/original/pngtree-location-pin-gps-pinned-track-picture-image_8230346.png', iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup className="h-[500px] w-[700px]">
            <h1>Hamilton College</h1>
            <Link key= {"/locations/location-1"} href={"/locations/location-1"}>Click Here To Learn More About Hamilton College and Climate Change</Link>
            <iframe width="600" height="400" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </Popup>
      </Marker>
      <Marker position={[43.1722431, -75.7342189]} icon={new Icon({ iconUrl : 'https://png.pngtree.com/png-clipart/20230823/original/pngtree-location-pin-gps-pinned-track-picture-image_8230346.png', iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup className="h-[500px] w-[700px]">
            <h1>Lake Oneida</h1>
            <Link key= {"/locations/location-2"} href={"/locations/location-2"}>Click Here To Learn More About Lake Oneida and Climate Change</Link>
            <iframe width="600" height="400" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </Popup>
      </Marker>
    </MapContainer>
    
  );
};

export default MapA;