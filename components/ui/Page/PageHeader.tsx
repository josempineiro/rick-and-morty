import { forwardRef, LegacyRef } from "react";
import { CodeIcon, MenuAlt2Icon, FilterIcon } from "@heroicons/react/outline";
import Popover from "components/ui/Popover";
import { SearchIcon } from "@heroicons/react/solid";
import { useLayoutContext } from "components/ui/Layout";
import FiltersForm from "components/ui/Filter";

interface Filter {
  name: string;
}

interface PageHeaderProps {
  children: React.ReactNode;
  filters?: Filter[];
}

const FilterWrapper = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  return <div {...props} ref={ref} className="flex w-full justify-between" />;
});

FilterWrapper.displayName = "FilterWrapper";

export default function PageHeader({ children, filters }: PageHeaderProps) {
  const { openSidebar } = useLayoutContext();
  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 md:hidden"
        onClick={openSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 flex justify-between">
        <div className="flex-1 flex">
          <Popover
            placement="auto-start"
            className="w-full relative flex items-center"
            as={(props, ref) => <FilterWrapper {...props} ref={ref} />}
            content={
              <div className="px-4">
                <FiltersForm
                  filters={filters}
                  onSubmit={console.log}
                  filterValues={{}}
                />
              </div>
            }
          >
            <div className="w-full flex px-4 items-center">
              <form className="w-full flex md:ml-0">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search-field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                    autoComplete="off"
                  />
                </div>
              </form>
              <FilterIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </Popover>
        </div>
        <div className="flex items-center space-x-3 px-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/josempineiro/rick-and-morty"
            className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            <span className="sr-only">View code</span>
            <CodeIcon className="h-6 w-6" aria-hidden="true" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/josempineiro"
            className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://avatars.githubusercontent.com/u/71317594"
              alt=""
              width="32"
              height="32"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
