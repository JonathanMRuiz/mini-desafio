import { createContext, useContext, useState } from "react";

const initialData = [
  { nombre: "Pedro", edad: 20, carrera: "Ingeniería", hobbie: "Futbol" },
  {
    nombre: "Rodrigo",
    edad: 22,
    carrera: "Arquitectura",
    hobbie: "Bajo eléctrico",
  },
  { nombre: "Romina", edad: 21, carrera: "Abogacía", hobbie: "Acrobacia" },
  { nombre: "Ana", edad: 23, carrera: "Contadora", hobbie: "Astronomía" },
];

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(initialData);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

const useStudents = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error(
      "Tenes que estar dentro del StudentProvider para usar este Hook"
    );
  }

  return context;
};

export { StudentProvider, useStudents };
