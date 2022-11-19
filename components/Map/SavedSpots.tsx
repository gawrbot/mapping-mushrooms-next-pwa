import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { ImageResponseBody } from '../../pages/api/images';

export default function LocationMarker() {
  const [images, setImages] = useState<any[]>([]);

  // Get pretty blue icon
  useEffect(() => {
    (async function init() {
      // @ts-ignore
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

  // Get all saved images
  useEffect(() => {
    async function getImagesAndCoordinates() {
      const imagesResponse = await fetch('/api/images');

      const imagesResponseBody =
        (await imagesResponse.json()) as ImageResponseBody[];

      return setImages(imagesResponseBody);
    }
    getImagesAndCoordinates().catch(() => {});
  }, []);

  return (
    <div>
      {images.length > 0
        ? images.map((image) => (
            <Marker key={image.id} position={[image.latitude, image.longitude]}>
              <Popup key={image.id}>
                <Link href={`profile/${image.usersUsername}/${image.id}`}>
                  <CldImage
                    width="200"
                    height="200"
                    src={image.image.slice(50)}
                    sizes="100vw"
                    alt={`image coordinates: ${image.longitude}, ${image.latitude}`}
                  />
                </Link>
              </Popup>
            </Marker>
          ))
        : null}
    </div>
  );
}
