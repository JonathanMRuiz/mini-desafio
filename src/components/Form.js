import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");

  const [password, setPassword] = useState("");

  const [dataSave, setDataSave] = useState([]);

  const handleText = (event) => {
    setValue(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setDataSave([
      {
        text: value,
        password: password,
      },
    ]);
  };
  const inputStyle =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const btnSubmit =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Text
        </label>
        <input
          type="text"
          id="text"
          className={inputStyle}
          placeholder="Insert Text"
          required=""
          onChange={handleText}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className={inputStyle}
          required=""
          onChange={handlePassword}
        />
      </div>

      <button type="submit" className={btnSubmit}>
        Submit
      </button>

      {dataSave.map((item, index) => (
        <div key={index}>
          <span>Datos recibidos correctamente</span>
          <p>Texto: {item.text}</p>
          <p>Contraseña: {item.password}</p>
        </div>
      ))}
    </form>
  );
};

export default Form;
