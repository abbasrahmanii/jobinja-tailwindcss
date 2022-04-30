import React from "react";
import { useField, ErrorMessage } from "formik";

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="relative flex flex-col mb-8">
      <label htmlFor="">{label}</label>
      <select
        className={` ${
          meta.touched && meta.error && "border-2 border-red-500"
        } block w-full rounded-md bg-purple-50 border-2 p-1 placeholder-gray-400`}
        name={field.name}
        {...props}
        {...field}
      ></select>
      <ErrorMessage
        name={field.name}
        component="div"
        className="-bottom-5 error"
      />
    </div>
  );
};

export default SelectInput;
