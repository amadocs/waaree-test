import React, { useState,useCallback,useEffect} from 'react';
import { GoogleMap, useLoadScript, InfoWindow, Marker } from '@react-google-maps/api';

export default function Map(props) {

  const containerStyle = {
    width: '600px',
    height: '400px'
  };


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "" // Add your API key
  });

  
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

    const [map, setMap] = useState(null);
    const handleOnLoad = useCallback((map) => setMap(map), []);
    useEffect(() => {
      if (map) {
        const bounds = new window.google.maps.LatLngBounds();
        props.markers.map(marker => {
          bounds.extend({
            lat: marker.attributes?.Franchisee_Location_Latitude,
            lng: marker.attributes?.Franchisee_Location_Longitude,
          });
        });
        map.fitBounds(bounds);
      }
    }, [map, props.markers]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      onLoad={handleOnLoad}
      // defaultZoom={5} 
      onClick={() => setActiveMarker(null)}
    >
      {props?.markers.map((val) => 

      {
          return(
            <Marker
          
            key={val.id}
            position={{lat: val?.attributes?.Franchisee_Location_Latitude , lng:val?.attributes?.Franchisee_Location_Longitude}}
            onClick={() => handleActiveMarker(val.id)}
          >
            {activeMarker === val.id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{val?.attributes?.Franchisee_Location_Name}</div>
              </InfoWindow>
            ) : null}
          </Marker>
          )
    }

      )}
      <></>
    </GoogleMap>
  ) : <></>
}