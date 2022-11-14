import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import Control from 'react-leaflet-custom-control';

export default function LocationMarker() {
  // Get pretty blue icon
  useEffect(() => {
    (async function init() {
      delete L.Icon.Default.prototype._getIconUrl;

      await L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      });
    })().catch(() => {
      console.log('Error loading the marker icon');
    });
  }, []);

  // Get current location on click
  const map = useMap();

  function clickHandlerLocation() {
    map.locate().on('locationfound', function (e) {
      map.flyTo(e.latlng, map.getZoom());

      const marker = L.marker(e.latlng);
      marker
        .addTo(map)
        .bindPopup(
          "<div><strong>You are here!<strong><br><a href='/upload'>Upload an image in this spot</a></div>",
        )
        .openPopup();
    });
  }

  return (
    <Control prepend position="bottomright">
      <button
        className="rounded-full bg-sky-500 p-3 text-white font-bold"
        onClick={() => {
          clickHandlerLocation();
        }}
      >
        My Location
      </button>
    </Control>
  );
}
