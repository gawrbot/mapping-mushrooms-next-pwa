import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

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

  function getQueryStringValue(key: string) {
    return decodeURIComponent(
      window.location.search.replace(
        new RegExp(
          '^(?:.*[&\\?]' +
            encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') +
            '(?:\\=([^&]*))?)?.*$',
          'i',
        ),
        '$1',
      ),
    );
  }

  const lat = getQueryStringValue('lat');
  const lng = getQueryStringValue('lng');
  const zoom = getQueryStringValue('zoom');

  useEffect(() => {
    function detectQueryString() {
      const currentQueryString = window.location.search;
      if (!currentQueryString) {
        return;
      } else {
        return map.setView([Number(lat), Number(lng)], Number(zoom));
      }
    }
    detectQueryString();
  });

  return null;
}
