import React from "react";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";

function Form({ setCharacter }) {
  const [inputs, handleChange, reset] = useForm({
    name: "",
  });

  const { name } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);

    if (!name.trim()) {
      return Swal.fire({
        title: "Error",
        text: "debe tener un nombre",
        icon: "error",
      });
    }

    setCharacter(name.trim().toLowerCase());
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese personaje"
        className="form-control mb-2"
        value={name}
        onChange={handleChange}
        name="name"
      />

      <button type="submit" className="btn btn-dark">
        Buscar
      </button>
    </form>
  );
}

export default Form;
