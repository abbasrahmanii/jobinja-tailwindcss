import React from "react";
import { useField, ErrorMessage } from "formik";

const Checkbox = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <div className="mb-4">
      <label>
        <input className="ml-2" type="checkbox" {...field} {...props} />
        {children}
      </label>
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};

export default Checkbox;
