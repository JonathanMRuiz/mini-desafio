import React from "react";
import PropTypes from "prop-types";

const TextField = ({ nameLabel, name, type, placeholder, onChangeText }) => {
  const inputStyle =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <>
      <div className="mb-6">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {nameLabel}
        </label>
        <input
          type={type}
          name={name}
          className={inputStyle}
          placeholder={placeholder}
          onChange={onChangeText}
        />
      </div>
    </>
  );
};

export default TextField;

TextField.propTypes = {
  nameLabel: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmit: PropTypes.func,
};
