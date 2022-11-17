import { Dialog } from '@headlessui/react';
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import { setStringifiedCookie } from '../../utils/cookies';

export default function SpotMarker() {
  // let [isOpen, setIsOpen] = useState(true);
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

  // function modal() {
  //   return (
  //     <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
  //       <Dialog.Panel>
  //         <Dialog.Title>Deactivate account</Dialog.Title>
  //         <Dialog.Description>
  //           This will permanently deactivate your account
  //         </Dialog.Description>

  //         <p>
  //           Are you sure you want to deactivate your account? All of your data
  //           will be permanently removed. This action cannot be undone.
  //         </p>

  //         <button onClick={() => setIsOpen(false)}>Deactivate</button>
  //         <button onClick={() => setIsOpen(false)}>Cancel</button>
  //       </Dialog.Panel>
  //     </Dialog>
  //   );
  // }

  const map = useMap();

  map.on('click', function (e) {
    L.marker([e.latlng.lat, e.latlng.lng])
      .addTo(map)
      .bindPopup('<div><button>hello</button></div>')
      .openPopup()
      .on('click', function setLocationCookie() {
        const currentLocationLng = e.latlng.lng;
        const currentLocationLat = e.latlng.lat;

        setStringifiedCookie('currentLocation', [
          { longitude: currentLocationLng, latitude: currentLocationLat },
        ]);
      });
  });

  return null;
}
