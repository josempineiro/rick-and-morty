import { Fragment } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/solid";
import { PageInfo } from "types";
import PaginationButton from "./PaginationButton";
import styles from "./Pagination.module.css";

interface PaginationProps {
  pageInfo: PageInfo;
  onNavigate: Function;
}

export default function Pagination({ pageInfo, onNavigate }: PaginationProps) {
  const { pages, next, prev, current, items } = pageInfo;
  const from = (current - 1) * 20 + 1;
  const to = (current - 1) * 20 + items;
  const total = pages * 20;

  return (
    <div className=" px-4 py-3 flex items-center justify-between border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          disabled={prev === null}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={() => onNavigate(prev)}
        >
          Previous
        </button>
        <button
          disabled={next === null}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={() => onNavigate(next)}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{from}</span> to{" "}
            <span className="font-medium">{to}</span> of{" "}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <PaginationButton
              disabled={prev === null}
              onClick={() => onNavigate(1)}
              title={"First"}
              icon
              current={current}
            >
              <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
            </PaginationButton>
            <PaginationButton
              disabled={prev === null}
              onClick={() => onNavigate(prev)}
              title={"Previous"}
              icon
              current={current}
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </PaginationButton>
            <PaginationButton
              onClick={() => onNavigate(current)}
              aria-current="page"
              title={`Page ${current}`}
              current={current}
            >
              {current}
            </PaginationButton>

            <PaginationButton
              disabled={next === null}
              onClick={() => onNavigate(next)}
              title={"Next page"}
              icon
              current={current}
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </PaginationButton>

            <PaginationButton
              disabled={next === null}
              onClick={() => onNavigate(pages)}
              title={"Last"}
              icon
              current={current}
            >
              <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
            </PaginationButton>
          </nav>
        </div>
      </div>
    </div>
  );
}
