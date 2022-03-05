import React from "react";
import { useField, Field } from "formik";
import { FieldProps } from "types";

function RadioGroupField({ label, hint, options, ...props }: FieldProps) {
  const [field, meta] = useField(props);
  const selected = options.find((option) => option.value === field.value);
  return (
    <div>
      {label && (
        <label className="text-base font-medium text-gray-900">{label}</label>
      )}
      {hint && <p className="text-sm leading-5 text-gray-500">{hint}</p>}
      <fieldset className="mt-4">
        <legend className="sr-only">{label}</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <Field
                type="radio"
                name={props.name}
                id={`${props.name}-${option.value}`}
                value={option.value}
                aria-describedby={`${option.value}-description`}
                className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300"
              />
              <label
                htmlFor={`${props.name}-${option.value}`}
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default RadioGroupField;
