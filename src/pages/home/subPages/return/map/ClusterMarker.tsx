import { Marker } from "react-map-gl";

type ClusterMarkerType = {
  points: any;
  supercluster: any;
  viewport: any;
  setViewport: any;
  onSelectCity: any;
  cluster: any;
};

const textSize: any = (pointCount: number) => {
  if (pointCount < 5) return "text-xs";
  if (pointCount < 10) return "text-sm";
  if (pointCount < 30) return "text-base";
  if (pointCount < 30) return "text-lg";
  if (pointCount < 40) return "text-xl";
  if (pointCount < 60) return "text-2xl";
  if (pointCount < 120) return "text-3xl";
  if (pointCount < 250) return "text-4xl";
  return "text-5xl";
};

const ClusterMarker = ({
  points,
  supercluster,
  viewport,
  setViewport,
  onSelectCity,
  cluster,
}: ClusterMarkerType) => {
  const {
    id,
    properties: { point_count: pointCount },
    geometry: {
      coordinates: [lng, lat],
    },
  } = cluster;

  // const addresses = supercluster.getLeaves(id).map((address: any) => {
  //   return address.properties.address[1];
  // }); 

  return (
    <Marker latitude={lat} longitude={lng}>
      <div
        className={`bg-success-500 text-xl ${textSize(
          pointCount
        )}  grid place-items-center text-center align-middle rounded-full `}
        style={{
          width: `${25 + (pointCount / points.length) * 200}px`,
          height: `${25 + (pointCount / points.length) * 200}px`,
        }}
        onClick={() => {
          // console.log(addresses[0].street, addresses[0].houseNumber)
          // addresses.map((address:any) => console.log(address.unitNumber))
          const expansionZoom = Math.min(
            supercluster.getClusterExpansionZoom(id),
            18
          );
          setViewport({
            ...viewport,
            latitude: lat,
            longitude: lng,
            zoom: expansionZoom,
          });
          onSelectCity({
            longitude: lng,
            latitude: lat,
            zoom: expansionZoom + 0.5,
          });
        }}
      >
        {pointCount}
      </div>
    </Marker>
  );
};

export default ClusterMarker;
