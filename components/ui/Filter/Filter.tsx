import { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { Formik, FormikHelpers, useFormikContext } from "formik";
import FilterField from "./FilterField";

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
}: FilterProps) => {
  return (
    <Formik initialValues={filterValues} onSubmit={onSubmit}>
      {(props) => (
        <form onSubmit={props.handleSubmit} className="space-y-4">
          {filters.map((filter) => (
            <FilterField key={filter.name} {...filter} />
          ))}
          {submitOnChange && <AutoSubmit />}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default Filter;
