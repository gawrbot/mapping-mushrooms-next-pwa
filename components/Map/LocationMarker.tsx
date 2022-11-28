import L from 'leaflet';
import Image from 'next/image';
import { useMap } from 'react-leaflet';
import Control from 'react-leaflet-custom-control';
import { setStringifiedCookie } from '../../utils/cookies';

export default function LocationMarker() {
  const greenIcon = L.icon({
    iconUrl: 'locationmarker.png',

    iconSize: [40, 40], // size of the icon
  });

  // Get current location on click
  const map = useMap();

  function clickHandlerLocation() {
    map.locate().on('locationfound', function (e) {
      map.flyTo(e.latlng, map.getZoom());

      const marker = L.marker(e.latlng, { icon: greenIcon });
      marker
        .addTo(map)
        .on('click', function setLocationCookie() {
          const currentLocationLng = e.latlng.lng;
          const currentLocationLat = e.latlng.lat;

          setStringifiedCookie('currentLocation', [
            { longitude: currentLocationLng, latitude: currentLocationLat },
          ]);
        })
        .bindPopup(
          "<div><strong>You are here!<strong><br><a href='/upload'>Upload an image in this spot</a></div>",
        );
    });
  }

  return (
    <Control prepend position="bottomright">
      <button
        className="rounded-full bg-[#324b50] aspect-square p-2 text-white font-bold text-lg border-5"
        onClick={() => {
          clickHandlerLocation();
        }}
      >
        <Image
          width={30}
          height={30}
          src="/location.png"
          alt="location marker"
        />
      </button>
    </Control>
  );
}
