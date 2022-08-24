import React from "react";

const Form = ({ onChangeText, onSubmit }) => {
  const inputStyle =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const btnSubmit =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-6">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Estudiante
        </label>
        <input
          type="text"
          name="student"
          className={inputStyle}
          placeholder="Inserte estudiante"
          onChange={onChangeText}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="number"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Edad
        </label>
        <input
          type="number"
          name="age"
          className={inputStyle}
          placeholder="Inserte edad"
          onChange={onChangeText}
          min="0"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Carrera
        </label>
        <input
          type="text"
          name="career"
          className={inputStyle}
          placeholder="Inserte carrera"
          onChange={onChangeText}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Hobbie
        </label>
        <input
          type="text"
          name="hobbie"
          className={inputStyle}
          placeholder="Inserte hobbie"
          onChange={onChangeText}
        />
      </div>

      <button type="submit" className={btnSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
