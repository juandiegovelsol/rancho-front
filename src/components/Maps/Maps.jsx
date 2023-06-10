import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";
import PropTypes from "prop-types";

import "./maps.scss";

const Maps = ({ centerlat, centerlng }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: centerlat, lng: centerlng }), []);
  return (
    <div className="maps">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
        >
          <Marker
            position={{ lat: 2.3444659, lng: -76.686588 }}
            visible={true}
          />
        </GoogleMap>
      )}
    </div>
  );
};

Maps.propTypes = {
  centerlat: PropTypes.number,
  centerlng: PropTypes.number,
};

export default Maps;
{
  /* <Marker
            position={{ lat: 2.3444659, lng: -76.686588 }}
            icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
          />
        </GoogleMap> */
}
