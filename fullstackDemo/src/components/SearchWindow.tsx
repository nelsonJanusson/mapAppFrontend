import axios from "axios";
import { useState } from "react";
import "./AddSightingForm.css";

function SearchWindow({ setSightings, setSightingsToDisplay }) {
  const [animal, setAnimal] = useState("");

  function getAnimals(): void {
    axios
      .post("http://localhost:8080/api/sightings/get/" + animal)
      .then((response) => response.data)
      .then((res) => {
        setSightings([res]);
        setSightingsToDisplay([res]);
      });
  }

  return (
    <>
      <div>
        <input
          placeholder="set Animal"
          onChange={(e) => setAnimal(e.target.value)}
        />
      </div>
      <button onClick={() => getAnimals()}> get animal Sightings</button>
    </>
  );
}

export default SearchWindow;
