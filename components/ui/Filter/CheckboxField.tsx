import React from "react";
import { useField, Field } from "formik";
import { FieldProps } from "types";

function CheckboxField({ label, options, ...props }: FieldProps) {
  const [field, meta] = useField(props);
  const selected = options.find((option) => option.value === field.value);
  return (
    <fieldset className="space-y-5">
      <legend className="sr-only">{label}</legend>
      {options.map((option) => (
        <div key={option.value} className="relative flex items-start">
          <div className="flex items-center h-5">
            <Field
              type="checkbox"
              id={`${props.name}-${option.value}`}
              name={props.name}
              value={option.value}
              className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300 rounded"
              aria-describedby={`${option.value}-description`}
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor={`${props.name}-${option.value}`}
              className="font-medium text-gray-700"
            >
              {option.label}
            </label>
            {option.hint && (
              <p id={`${option.value}-description`} className="text-gray-500">
                {option.hint}
              </p>
            )}
          </div>
        </div>
      ))}
    </fieldset>
  );
}

export default CheckboxField;
