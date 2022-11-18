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

  // @ts-ignore
  useEffect(() => {
    const provider = new OpenStreetMapProvider();
    // @ts-ignore
    const searchControl = new GeoSearchControl({
      provider,
      style: 'bar',
    });

    map.addControl(searchControl);
    // @ts-ignore
    return () => map.removeControl(searchControl);
  }, [map]);

  return null;
}
