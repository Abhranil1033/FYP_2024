import React, { useCallback, useState,useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import Loader from '../components/Loader/Loader.js'; // Assuming this is your custom loader component
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const initialCenter = {
  lat: 30.7333,
  lng: 76.7794,
};

const MapComponent = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDZmLn0W3ACfhyVlDt9XFRCNo6dA7-S_gI',
  });

  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [center, setCenter] = useState(initialCenter);
  const params = useParams();
  const [eventDetails, seteventDetails] = useState(null);
  const eventID = params.id;
  const [loading, setLoading] = useState(true); // Define loading state


  const getEventDetails = async (eventID) => {
    try {
      const details = await axios.get(`/api/v1/events/${eventID}`);
      if (details && details.data.event) {
        seteventDetails(details.data.event);
      } else {
        console.log("No available Events");
        toast.error("No available activities");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Error fetching activities");
    }
    finally {
      setLoading(false); // Set loading to false when the request is completed
    }
  };

  useEffect(() => {
    getEventDetails(eventID);
  }, [eventID]);

  const markers = [
    {
      position: { lat: 30.733, lng: 76.7794 },
      title: 'Event',
      content: 'Event location',
    },
  ];

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleCenterChange = () => {
    if (eventDetails && eventDetails.lat && eventDetails.lng) {
      setCenter({ lat: eventDetails.lat, lng: eventDetails.lng });
    }
  };

  if (loadError) {
    return <div>Error loading map</div>;
  }

  if (loading) {
    return <Loader />;
  }

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} onClick={() => handleMarkerClick(marker)} />
        ))}
        {selectedMarker && (
          <InfoWindow position={selectedMarker.position} onCloseClick={() => setSelectedMarker(null)}>
            <div>
              <h3>{selectedMarker.title}</h3>
              <p>{selectedMarker.content}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      <button onClick={handleCenterChange}>Change Center</button>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default MapComponent;
