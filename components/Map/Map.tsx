import 'leaflet/dist/leaflet.css';
import * as ReactLeaflet from 'react-leaflet';
import styles from './Map.module.css';

const { MapContainer } = ReactLeaflet;

const Map = ({ children, className, ...rest }: any) => {
  let mapClassName = styles.map;

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  return (
    <MapContainer className={mapClassName} {...rest}>
      {children(ReactLeaflet)}
    </MapContainer>
  );
};

export default Map;
