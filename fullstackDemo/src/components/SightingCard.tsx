import axios from "axios";
import "./SightingCard.css";

function SightingCard({
  sighting,
  setSightings,
  setSightingsToDisplay,
  sightings,
}) {
  const removeSighting = (id: string) => {
    axios
      .delete("http://localhost:8080/api/sightings/delete/" + id)
      .then(() => {
        setSightings((prevSightings) =>
          prevSightings.filter((e) => e.id != id)
        );
        setSightingsToDisplay(sightings.filter((e) => e.id != id));
      });
  };

  return (
    <div className="card">
      <p>animal: {sighting.animal}</p>
      <p>longitude: {sighting.x_coordinate}</p>
      <p>latitude: {sighting.y_coordinate}</p>
      <p>date: {sighting.date}</p>
      <p>description: {sighting.description}</p>
      <button
        onClick={() => {
          removeSighting(sighting.id);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default SightingCard;
