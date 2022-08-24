import React, { useState } from "react";
import Form from "../components/Form";

const FormPage = () => {
  const [formData, setFormData] = useState({
    student: "",
    age: 0,
    career: "",
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
    console.log(formData);
    e.target.reset();
  };

  return (
    <div className="bg-slate-500 h-screen flex justify-center items-center">
      <Form
        onChangeText={handleText}
        onSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default FormPage;
