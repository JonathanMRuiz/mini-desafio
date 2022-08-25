import React from "react";

const Table = ({ dataTable }) => {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Nombre
            </th>
            <th scope="col" className="py-3 px-6">
              Edad
            </th>
            <th scope="col" className="py-3 px-6">
              Carrera
            </th>
            <th scope="col" className="py-3 px-6">
              Hobbie
            </th>
          </tr>
        </thead>
        {dataTable.map((item, index) => (
          <tbody key={index}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.nombre}
              </th>
              <td className="py-4 px-6">{item.edad}</td>
              <td className="py-4 px-6">{item.carrera}</td>
              <td className="py-4 px-6">{item.hobbie}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
