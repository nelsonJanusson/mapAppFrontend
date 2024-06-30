import "./App.css";
import SightingsList from "./components/SightingsList";
import { useEffect, useState } from "react";
import axios from "axios";
import AddSightingForm from "./components/AddSightingForm";
import MapChart from "./MapChart";

function App() {
  const [sightings, setSightings] = useState(null);
  const [sightingsToDisplay, setSightingsToDisplay] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:8080/api/sightings/getAll").then((res) => {
      setSightings(res.data);
      setSightingsToDisplay(res.data);
    });
  }, []);
  return sightings ? (
    <>
      <AddSightingForm
        setSightings={setSightings}
        setSightingsToDisplay={setSightingsToDisplay}
      />
      <SightingsList
        sightings={sightings}
        sightingsToDisplay={sightingsToDisplay}
        setSightingsToDisplay={setSightingsToDisplay}
        setSightings={setSightings}
      />
      <MapChart
        sightings={sightings}
        setSightingsToDisplay={setSightingsToDisplay}
        sightingsToDisplay={sightingsToDisplay}
      />
    </>
  ) : (
    <div>loading</div>
  );
}

export default App;
