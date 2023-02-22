import { useCallback, useEffect, useRef, useState } from "react";
import useSupercluster from "use-supercluster";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import EditModal from "./EditModal";
import { useDarkMode } from "usehooks-ts";
import ClusterMarker from "./ClusterMarker";

type MapType = {
  children?: any;
  setCurrentSubpage?: any;
  addresses?: any;
};

const mapboxAccessToken =
  "pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ";

const MapPage = ({ addresses, setCurrentSubpage }: MapType) => {

  const damiansHome = {lng: 151.571001, lat: -32.7707}
  const { isDarkMode } = useDarkMode();
  const addressesData = addresses ? addresses : {};
  const [viewport, setViewport] = useState({
    latitude: -32.7707,
    longitude: 151.571001,
    width: "100vw",
    height: "100vh",
    zoom: 12,
  });

  const mapRef = useRef<any>(null);
  const points = Object.entries(addressesData).map((address: any) => ({
    type: "Feature",
    properties: {
      cluster: false,
      address,
      addressID: address[1].id,
      houseNumber: address[1].houseNumber,
    },
    geometry: {
      type: "Point",
      coordinates: [address[1].lng, address[1].lat],
    },
  }));

  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;

  const { clusters, supercluster } = useSupercluster({
    points,
    zoom: viewport.zoom,
    bounds,
    options: { radius: 50, maxZoom: 18, minPoints: 2 },
  });

  const onSelectCity = useCallback(({ longitude, latitude, zoom }: any) => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 2000,
      zoom: zoom,
    });
  }, []);

  return (
    <Map
      reuseMaps
      initialViewState={{
        latitude: -32.7707,
        longitude: 151.571001,
        zoom: 11,
      }}
      maxZoom={18}
      minZoom={11}
      maxBounds={[damiansHome.lng - 0.14,damiansHome.lat - 0.05,damiansHome.lng + 0.25,damiansHome.lat + 0.4]}
      onMoveEnd={(event: any) => {
        setViewport({ ...viewport, ...event.viewState });
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle={`mapbox://styles/damianamodeo/${
        isDarkMode ? "clefix5la000901po4wflstdd" : "clefifzvz000u01nw8h84n67m"
      }`}
      mapboxAccessToken={mapboxAccessToken}
      ref={mapRef}
    >
      {clusters.map((cluster: any, key: number) => {
        const [lng, lat] = cluster.geometry.coordinates;
        const {
          cluster: isCluster,
          point_count: pointCount,
          address,
        } = cluster.properties;
        if (cluster.properties.cluster) {
          return (
            <ClusterMarker
              key={key}
              points={points}
              supercluster={supercluster}
              viewport={viewport}
              setViewport={setViewport}
              onSelectCity={onSelectCity}
              cluster={cluster}
            ></ClusterMarker>
          );
        }
        return (
          <Marker
            key={key}
            latitude={lat}
            longitude={lng}
            onClick={() => {
              setCurrentSubpage(
                1,
                null,
                true,
                <EditModal
                  address={address}
                  setCurrentSubpage={setCurrentSubpage}
                ></EditModal>
              );
            }}
          >
            <div className="bg-error-500 p-1 rounded-full">
              {address[1].houseNumber}
            </div>
          </Marker>
        );
      })}
    </Map>
  );
};

export default MapPage;
