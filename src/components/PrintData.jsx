import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Character from "./Character";
import Loading from "./Loading";

function PrintData({ character }) {
  useEffect(() => {
    consumirApi(character);
  }, [character]);

  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(false);

  const consumirApi = async (char) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${char}&status=alive`
      );
      if (!res.ok) {
        return Swal.fire({
          title: "Error",
          text: "Personaje no encontrado",
          icon: "error",
        });
      }

      const data = await res.json();
      setChars(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="row mt-2">
      {chars.map((item) => (
        <Character key={item.id} character={item} />
      ))}
    </div>
  );
}

export default PrintData;
