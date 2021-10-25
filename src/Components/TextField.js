import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="my-6">
      <label className="block" htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`block ${
          meta.touched && meta.error && "border-2 border-red-500"
        }`}
        type="text"
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage component="div" className="error" name={field.name} />
    </div>
  );
};

export default TextField;
