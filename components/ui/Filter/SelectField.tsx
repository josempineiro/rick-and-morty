/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import classNames from "classnames";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useField } from "formik";
import { FieldProps } from "types";

export default function SelectField({
  variant,
  label,
  hint,
  options,
  placeholder,
  className,
  ...props
}: FieldProps) {
  const [field, meta, helpers] = useField(props);
  const selected = options.find((option) => option.value === field.value);

  const handleChange = (selectedOption) => {
    helpers.setValue(selectedOption.value);
  };

  return (
    <div className={classNames(className)}>
      <Listbox value={selected} onChange={handleChange}>
        {({ open }) => (
          <>
            {variant === "labeled" && (
              <Listbox.Label className="block text-sm font-medium text-gray-700">
                {label}
              </Listbox.Label>
            )}
            <div className="relative w-full">
              <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm">
                {selected && (
                  <span className="block truncate">{selected.label}</span>
                )}
                {!selected && (
                  <span className="block truncate text-gray-500">
                    {variant === "labeled" &&
                      (placeholder || "Select an option")}
                    {variant !== "labeled" && label}
                  </span>
                )}
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.value}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-cyan-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-3 pr-9"
                        )
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <div className="flex space-x-2 items-center">
                          <input
                            type="radio"
                            name={`${props.name}-${option.value}`}
                            id={`${props.name}-${option.value}`}
                            checked={selected}
                            aria-describedby={`${option.value}-description`}
                            className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300"
                            style={{
                              backgroundColor: selected && active && "white",
                              backgroundImage:
                                selected &&
                                active &&
                                `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(8, 145, 178)' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
                            }}
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {option.label}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-cyan-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>

      {meta.touched && meta.error ? (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {meta.error}
        </p>
      ) : (
        hint &&
        variant === "labeled" && (
          <p className="mt-2 text-sm text-gray-500" id="email-description">
            {hint}
          </p>
        )
      )}
    </div>
  );
}
