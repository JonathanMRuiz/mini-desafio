import React from "react";
import Table from "../components/Table";
import { useStudents } from "../context/StudentContext";

const TablePage = () => {
  const { students } = useStudents();
  return (
    <div className="bg-neutral-600 h-screen flex justify-center items-center">
      <Table dataTable={students} />
    </div>
  );
};

export default TablePage;
