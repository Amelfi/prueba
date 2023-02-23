import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './map.css'
import L from 'leaflet'
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";
import axios from 'axios'
import { useEffect, useState} from 'react';

let iconUbicacion = new L.icon({
    iconUrl: icon,
    iconShadow: iconShadow,
    iconSize: [35, 35],
    iconAnchor: null,
    shadowAnchor: null,
    
});

const MapaComp = () => {
     
    const [longitud, setLongitud]= useState(0);
    const [latitud, setLatitud]= useState(0);

    useEffect(() => {
      coord()  
         
    }, [])
    
    const coord = async()=>{
        let info =await axios.post('http://localhost:5000/location', {"data": [
            {
            "ficha": "RR-34",
            "lat": 18.735693,
            "long": -70.162651,
            "speed": 106
            
            }
            ]})
            // console.log(info.data.long)
        setLongitud(info.data.long)
        setLatitud(info.data.lat)
    }
    console.log(longitud)

  return (
    <div>
        
        <h1>hola</h1>
 {  !latitud ===0 ? (<MapContainer center={[latitud, longitud]} zoom={13} scrollWheelZoom={false} className='map'>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[latitud, longitud]} icon={iconUbicacion}>
        <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
    </Marker>
    </MapContainer>
):(null)}
    </div>
  )
}

export default MapaComp