import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../components/TextField";
import { useStudents } from "../context/StudentContext";

const FormPage = () => {
  const { addStudent } = useStudents();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    edad: 0,
    carrera: "",
    hobbie: "",
  });

  const handleText = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    e.target.reset();
    navigate("/table");
  };

  const btnSubmit =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

  return (
    <form onSubmit={handleSubmit} className="bg-slate-500  ">
      <div className="flex justify-center flex-col items-center h-screen">
        <div className="text-white text-1xl mb-5 border-b">
          <h3 className="">Agregar estudiante a la tabla</h3>
        </div>
        <TextField
          nameLabel="Estudiante"
          name="nombre"
          type="text"
          placeholder="Ingrese nombre"
          onChangeText={handleText}
        />
        <TextField
          nameLabel="Edad"
          name="edad"
          type="number"
          placeholder="Ingrese edad"
          onChangeText={handleText}
        />
        <TextField
          nameLabel="Carrera"
          name="carrera"
          type="text"
          placeholder="Ingrese carrera"
          onChangeText={handleText}
        />
        <TextField
          nameLabel="Hobbie"
          name="hobbie"
          type="text"
          placeholder="Ingrese hobbie"
          onChangeText={handleText}
        />

        <button type="submit" className={btnSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormPage;
