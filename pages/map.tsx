import {
  LocationMarker,
  Map,
  SavedSpots,
  Search,
  SpotMarker,
} from '../components/Map';

const defaultCenter = [48.193453, 16.408898];

export default function HomeMap() {
  return (
    <Map
      className="w-screen h-screen"
      zoom={15}
      center={defaultCenter}
      scrollWheelZoom={false}
    >
      {({ TileLayer }: any) => (
        <>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker />
          <SpotMarker />
          <SavedSpots />

          <Search />
        </>
      )}
    </Map>
  );
}
