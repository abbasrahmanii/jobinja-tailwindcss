import React from "react";
import { Field, useField, ErrorMessage } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4 ">
      <label htmlFor={field.name}>{label}</label>
      <Field
        {...props}
        {...field}
        autoComplete="off"
        className={`block w-full rounded-md bg-purple-50 border-2 p-1 placeholder-gray-400 outline-none ${
          meta.touched && meta.error ? "border-red-500" : "border-indigo-200"
        }`}
      />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};

export default TextInput;
