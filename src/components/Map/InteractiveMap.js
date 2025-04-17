import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {
  MAP_NAME,
  createMapLibreRequestTransformer
} from '../../services/awsLocationService'; // Import AWS config

const InteractiveMap = ({ userLocation, initialCenter = [-98.5795, 39.8283], initialZoom = 3 }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Prevent map re-initialization
    if (mapRef.current || !mapContainerRef.current) return;

    const transformer = createMapLibreRequestTransformer();

    // Construct the style URL
    const styleUrl = `https://maps.geo.${process.env.REACT_APP_AWS_REGION}.amazonaws.com/maps/v0/maps/${MAP_NAME}/style-descriptor`;

    try {
      mapRef.current = new maplibregl.Map({
        container: mapContainerRef.current,
        style: styleUrl,
        center: initialCenter,
        zoom: initialZoom,
        requestTransformer: transformer, // Apply the transformer for signing requests
        attributionControl: true
      });

      mapRef.current.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

      mapRef.current.on('load', () => {
        console.log("Map loaded successfully.");
        setMapLoaded(true);
      });

      mapRef.current.on('error', (e) => {
          console.error('MapLibre GL error:', e);
          // Potentially display an error message to the user
          if (e.error?.message.includes('Forbidden') || e.error?.message.includes('Unauthorized')) {
              console.error('Map Error: Check AWS credentials/permissions and request signing.');
          }
      });

    } catch (error) {
        console.error("Failed to initialize map:", error);
    }

    // Cleanup map instance on component unmount
    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
      setMapLoaded(false);
    };

  }, [initialCenter, initialZoom]); // Re-init only if initial props change

  // Effect to handle user location marker
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return; // Ensure map is initialized and loaded

    // Remove existing marker if it exists
    if (markerRef.current) {
      markerRef.current.remove();
      markerRef.current = null;
    }

    // Add new marker if userLocation is available
    if (userLocation?.longitude && userLocation?.latitude) {
      markerRef.current = new maplibregl.Marker({ color: "#E53E3E" }) // Use warning-red
        .setLngLat([userLocation.longitude, userLocation.latitude])
        .addTo(mapRef.current);

      // Optionally fly to the user's location
      mapRef.current.flyTo({
        center: [userLocation.longitude, userLocation.latitude],
        zoom: 13, // Zoom in closer when location is known
        essential: true 
      });
    }
  }, [userLocation, mapLoaded]); // Update marker when location or map loaded state changes

  // TODO: Add logic to display hot zone data (e.g., GeoJSON layer)

  return (
    <div 
      ref={mapContainerRef} 
      className="map-container w-full h-full rounded-lg overflow-hidden shadow-inner"
      style={{ minHeight: '300px' }} // Ensure container has height
    />
  );
};

export default InteractiveMap; 