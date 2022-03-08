import { useState, useEffect, useRef, Fragment } from "react";
import _ from "lodash";
import classNames from "classnames";
import { Formik, FormikHelpers, useFormikContext } from "formik";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon, FilterIcon } from "@heroicons/react/outline";
import Button from "components/ui/Button";
import FilterField from "./FilterField";

interface Filter {
  name: string;
  className: string;
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
  const [open, setOpen] = useState(true);
  return (
    <Formik initialValues={filterValues} onSubmit={onSubmit}>
      {(props) => (
        <form
          onSubmit={props.handleSubmit}
          className={classNames(
            className,
            "space-y-4 md:flex md:space-x-4 md:space-y-0 md:my-3"
          )}
        >
          {filters.map((filter) => (
            <FilterField
              key={filter.name}
              {...filter}
              className={classNames(
                filter.className,
                "space-y-4 md:flex md:space-x-4 md:space-y-0 md:flex-1"
              )}
            />
          ))}
          {submitOnChange && <AutoSubmit />}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Filter
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export const ReponsiveFilter = (props) => {
  const [open, setOpen] = useState(false);
  const handleSubmit = (...args) => {
    setOpen(false);
    props.onSubmit(...args);
  };
  return (
    <>
      <div className="flex md:hidden py-2 justify-end">
        <Button
          onClick={() => setOpen(true)}
          type="button"
          variant="tertiary"
          icon={<FilterIcon />}
        />
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden md:hidden z-50"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Dialog.Overlay className="absolute inset-0" />

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          {props.title}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <Button
                            type="button"
                            rounded
                            size="tiny"
                            variant="tertiary"
                            onClick={() => setOpen(false)}
                            icon={<XIcon aria-hidden="true" />}
                          >
                            <span className="sr-only">Close panel</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <Filter {...props} onSubmit={handleSubmit} />
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Filter
        className="hidden space-y-4 md:flex md:space-x-4 md:space-y-0"
        submitOnChange
        {...props}
      />
    </>
  );
};

export default Filter;
