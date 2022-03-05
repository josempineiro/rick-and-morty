import React from "react";
import { useField } from "formik";
import { FieldProps } from "types";

const TextField = ({ label, hint, ...props }: FieldProps) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
          {...field}
          {...props}
        />
      </div>

      {meta.touched && meta.error ? (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {meta.error}
        </p>
      ) : (
        hint && (
          <p className="mt-2 text-sm text-gray-500" id="email-description">
            {hint}
          </p>
        )
      )}
    </div>
  );
};

export default TextField;
