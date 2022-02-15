import { useEffect, useState } from "react";
import Form from "./components/Form";
import PrintData from "./components/PrintData";

function App() {
  const [character, setCharacter] = useState("");

  useEffect(() => {
    if (localStorage.getItem("nameApi")) {
      setCharacter(JSON.parse(localStorage.getItem("nameApi")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("nameApi", JSON.stringify(character));
  }, [character]);

  return (
    <div className="container">
      <h1>Rick and morty API</h1>
      <Form setCharacter={setCharacter} />
      <PrintData character={character} />
    </div>
  );
}

export default App;
