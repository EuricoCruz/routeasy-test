import React from 'react'
import { Map as LeafMap, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Map = () => {

    return (
      <LeafMap
        style= {{height: '50vh', width: '80vh'}}
        center={[-23.617846, -46.637965]}
        zoom={12}
        maxZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      <Marker position={[-23.617846, -46.637965]}>
            {/* <Popup>
              <p>{delivery.name}</p>
              <p>{delivery.peso}kg</p>
            </Popup> */}
          </Marker>
        })}
      </LeafMap>
    );
}

export default Map