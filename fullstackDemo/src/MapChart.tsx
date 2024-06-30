import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "./MapChart.css";

//const geoUrl =
// "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function MapChart({
  sightingsToDisplay,
  setSightingsToDisplay,
  sightings,
}) {
  return (
    <ComposableMap>
      <Geographies geography="/countries-110m.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {sightings.map((sighting) => (
        <Marker
          coordinates={[sighting.x_coordinate, sighting.y_coordinate]}
          onClick={() => setSightingsToDisplay([sighting])}
        >
          <circle r={5} fill="#FFFFFF" />
          <text
            textAnchor="middle"
            y="-10"
            style={{ fill: "#FFFFFF", fontSize: "small" }}
          >
            {sighting.animal}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}
