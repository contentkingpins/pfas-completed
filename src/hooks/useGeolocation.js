import { useState, useEffect } from 'react';

const useGeolocation = (options = {}) => {
  const [location, setLocation] = useState(null); // { latitude: number, longitude: number }
  const [error, setError] = useState(null); // string | null
  const [loading, setLoading] = useState(true);
  const [permissionState, setPermissionState] = useState(null); // 'granted', 'prompt', 'denied'

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
      setPermissionState('denied'); // Treat lack of support as denied
      return;
    }

    // Check initial permission status
    navigator.permissions?.query({ name: 'geolocation' }).then((status) => {
        setPermissionState(status.state);
        status.onchange = () => setPermissionState(status.state);

        if (status.state === 'granted') {
            fetchLocation();
        } else if (status.state === 'prompt') {
            // Wait for user interaction - maybe trigger request from UI
            setLoading(false); 
        } else { // denied
            setError('Geolocation permission denied.');
            setLoading(false);
        }
    }).catch(() => {
        // If Permissions API is not supported, fallback to directly requesting
        console.warn('Permissions API not supported, requesting geolocation directly.');
        fetchLocation(); // Request directly, will trigger browser prompt
    });

    const fetchLocation = () => {
        setLoading(true);
        setError(null);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                setError(null);
                setLoading(false);
                setPermissionState('granted'); // Update state if granted via prompt
            },
            (err) => {
                setError(err.message || 'Failed to get location.');
                setLocation(null);
                setLoading(false);
                if(err.code === err.PERMISSION_DENIED) {
                    setPermissionState('denied');
                }
            },
            options // Pass options like enableHighAccuracy, timeout, maximumAge
        );
    };

    // Expose a function to manually request location if needed (e.g., on button click)
    // This might be useful if initial permission is 'prompt'
    // requestLocation = fetchLocation; // How to expose this? Context or return value?

    // No cleanup needed for getCurrentPosition

  }, [options]); // Re-run if options change

  // Function to manually trigger the location request
  const requestLocation = () => {
    if (!navigator.geolocation) return; // Already handled in effect, but good practice
    if (permissionState === 'prompt' || permissionState === null) {
        setLoading(true);
        setError(null);
        navigator.geolocation.getCurrentPosition(
             (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                setError(null);
                setLoading(false);
                setPermissionState('granted');
            },
            (err) => {
                setError(err.message || 'Failed to get location.');
                setLocation(null);
                setLoading(false);
                if(err.code === err.PERMISSION_DENIED) {
                    setPermissionState('denied');
                }
            },
            options
        );
    }
  };

  return { location, error, loading, permissionState, requestLocation };
};

export default useGeolocation; 