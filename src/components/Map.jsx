import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";
import {useCities} from '../contexts/CitiesContext';

function Map() {

  const {cities}=useCities();

  const [searchParams, setSearchParams] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const mapLat = searchParams.get("lat")||mapPosition[0];
  const mapLng = searchParams.get("lng")||mapPosition[1];

  useEffect(
    function(){
        if(mapLat&&mapLng)
        setMapPosition([mapLat,mapLng]);
    }
  ,[mapLat,mapLng,setMapPosition]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city)=><Marker position={[city.position.lat,city.position.lng]} key={city.id}>
          <Popup>
            <span>{city.emoji}</span><span>{city.cityName}</span>
          </Popup>
        </Marker>)}
        <ChangeCenter position={[mapLat,mapLng]}></ChangeCenter>
        <DetectClick/>
      </MapContainer>
    </div>
  );
}

function ChangeCenter({position}){
    const map=useMap();
    map.setView(position);
    return <></>;
}

function DetectClick(){
    const navigate = useNavigate();
    useMapEvents({
        click:(e)=>{navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);}
    }
    );
}

export default Map;
