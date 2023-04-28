import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-markercluster";

function MapApp() {

  return (
    <React.Fragment>
      <MapContainer className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <MarkerClusterGroup>
          <Marker position={[49.8397, 24.0297]} />
          <Marker position={[52.2297, 21.0122]} />
          <Marker position={[51.5074, -0.0901]} />
        </MarkerClusterGroup> */}
         <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
      </MapContainer>
    </React.Fragment>
  );
}
export default MapApp;