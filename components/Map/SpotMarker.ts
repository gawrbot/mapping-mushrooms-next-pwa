import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { setStringifiedCookie } from '../../utils/cookies';

// Tutorial: skateboard parks as markers: https://blog.logrocket.com/react-leaflet-tutorial/
// https://9to5answer.com/leaflet-how-to-find-existing-markers-and-delete-markers
// https://stackoverflow.com/questions/57704196/leaflet-with-next-js
// https://github.com/yuiseki/crisis-news-map-next
// GeoSearch: https://github.dev/dwestland/next-leaflet

export default function SpotMarker() {
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

  const map = useMap();

  map.on('click', function (e) {
    L.marker([e.latlng.lat, e.latlng.lng])
      .addTo(map)
      .bindPopup(
        "<div><a href='/upload'>Save this spot and upload an image here</a></div>",
      )
      .openPopup();
    function setLocationCookie() {
      const currentLocationLng = e.latlng.lng;
      const currentLocationLat = e.latlng.lat;

      setStringifiedCookie('currentLocation', [
        { longitude: currentLocationLng, latitude: currentLocationLat },
      ]);
    }
    setLocationCookie();
  });

  return null;
}
