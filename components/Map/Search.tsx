import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

// const searchControl = new GeoSearchControl({
//   provider: new OpenStreetMapProvider(),
//   style: 'bar',
// });

// map.addControl(searchControl);
// make new leaflet element
export default function Search() {
  const map = useMap();
  const provider = new OpenStreetMapProvider();

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider,
      style: 'bar',
    });

    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
}
