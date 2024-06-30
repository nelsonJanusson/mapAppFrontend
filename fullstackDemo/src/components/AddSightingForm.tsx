import axios from "axios";
import { useState } from "react";
import "./AddSightingForm.css";
function AddSightingForm({ setSightings, setSightingsToDisplay }) {
  const [yCoordinate, setYCoordinate] = useState("");
  const [xCoordinate, setXCoordinate] = useState("");
  const [animal, setAnimal] = useState("");
  const [description, setDescription] = useState("");

  function createSighting(): void {
    axios
      .post(
        "http://localhost:8080/api/sightings/create/" +
          yCoordinate +
          "/" +
          xCoordinate +
          "/" +
          animal +
          "/" +
          description
      )
      .then((response) => response.data)
      .then((res) => {
        setSightings((prevSightings) => [...prevSightings, res]);
        setSightingsToDisplay([res]);
      });
  }

  return (
    <>
      <div>
        <input
          placeholder="set latitude"
          onChange={(e) => setYCoordinate(e.target.value)}
        />
        <input
          placeholder="set longitude"
          onChange={(e) => setXCoordinate(e.target.value)}
        />{" "}
        <input
          placeholder="set Animal"
          onChange={(e) => setAnimal(e.target.value)}
        />
        <input
          placeholder="set description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button onClick={() => createSighting()}> createSighting</button>
    </>
  );
}

export default AddSightingForm;
