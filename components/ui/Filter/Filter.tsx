import { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { Formik, FormikHelpers, useFormikContext } from "formik";
import FilterField from "./FilterField";
import classNames from "classnames";

interface Filter {
  name: string;
}

type SubmitFunction = ((
  values: object,
  formikHelpers: FormikHelpers<object>
) => void | Promise<any>) &
  Function;

interface FilterProps {
  filters: Filter[];
  submitOnChange?: boolean;
  onSubmit: SubmitFunction;
  filterValues: object;
  validate?: Function;
  className?: string;
}
const AutoSubmit = () => {
  // Grab values and submitForm from context
  const { values, initialValues, submitForm } = useFormikContext();
  const [lastValues, updateState] = useState(values);
  const submitFormDebounce = useRef(() => {});

  useEffect(() => {
    submitFormDebounce.current = _.debounce(submitForm, 2000);
  }, [submitForm]);

  useEffect(() => {
    const valuesEqualsInitialvalues = _.isEqual(values, initialValues);
    const valuesEqualsLastValues = _.isEqual(values, lastValues);
    if (!_.isEqual(lastValues, values)) {
      updateState(values);
    }
    if (!valuesEqualsInitialvalues && !valuesEqualsLastValues) {
      submitFormDebounce.current();
    }
  }, [values, initialValues, lastValues]);
  return null;
};

const Filter = ({
  filterValues,
  filters,
  onSubmit,
  submitOnChange,
  className,
}: FilterProps) => {
  return (
    <Formik initialValues={filterValues} onSubmit={onSubmit}>
      {(props) => (
        <form
          onSubmit={props.handleSubmit}
          className="space-y-4 md:flex md:space-x-4 md:space-y-0 md:py-3"
        >
          {filters.map((filter) => (
            <FilterField
              key={filter.name}
              {...filter}
              className="space-y-4 md:flex md:space-x-4 md:space-y-0 md:flex-1"
            />
          ))}
          {submitOnChange && <AutoSubmit />}
          <button
            type="submit"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Filter
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Filter;
