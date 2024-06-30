import SightingCard from "./SightingCard";
import "./SightingsList.css";

function SightingsList({
  sightings,
  sightingsToDisplay,
  setSightingsToDisplay,
  setSightings,
}) {
  return (
    <div>
      <ul>
        {sightingsToDisplay.map((sighting) => (
          <li>
            <SightingCard
              sightings={sightings}
              setSightingsToDisplay={setSightingsToDisplay}
              sighting={sighting}
              setSightings={setSightings}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SightingsList;
