import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Tailwind styles for map container
const mapStyle = {
  width: "90%",
  height: "500px",
  zIndex: 1,
};

// Marker icon configuration (Leaflet)
const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
});

const Map = () => {
  // Coordinates for a particular place (example: Goa, India)
  const placeCoordinates = [19.1548, 72.8562];
  const placeName = "Goregaon Hub Mall, Mumbai, India"; // Name of the place

  // Function to handle marker click event
  const handleMarkerClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?q=${encodeURIComponent(placeName)}`;
    window.open(googleMapsUrl, "_blank"); // Open Google Maps with the given coordinates
  };

  return (
    <div className="flex justify-center items-center p-4 mb-8">
      <MapContainer center={placeCoordinates} zoom={12} style={mapStyle}>
        {/* OpenStreetMap Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marker with Popup */}
        <Marker
          position={placeCoordinates}
          icon={markerIcon}
          eventHandlers={{ click: handleMarkerClick }} // Open Google Maps when clicked
        >
          <Popup>{placeName}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
