import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { PageInfo } from 'types'
import PaginationButton from './PaginationButton'
import styles from './Pagination.module.css'

interface PaginationProps {
  pageInfo: PageInfo
  onNavigate: Function
}

export default function Pagination({ pageInfo, onNavigate }: PaginationProps) {
  const { pages, next, prev, current, items } = pageInfo
  const from = (current - 1) * items + 1
  const to = current * items
  const total = pages * items

  const paginationPages = [
    1,
    ...Array.from(new Array(3)).map((_, index) => current + (-1 + index)),
    pages,
  ].filter(
    (page, index, paginationPages) =>
      page > 0 && page <= pages && index === paginationPages.indexOf(page)
  )
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-gray-200 sm:px-6">
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
            Showing <span className="font-medium">{from}</span> to{' '}
            <span className="font-medium">{to}</span> of{' '}
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
              onClick={() => onNavigate(prev)}
              title={'Previous'}
              current={current}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </PaginationButton>
            {paginationPages.map((page, index) => (
              <Fragment key={page}>
                <PaginationButton
                  onClick={() => onNavigate(page)}
                  aria-current="page"
                  title={`Page ${page}`}
                  current={current}
                  index={page}
                >
                  {page}
                </PaginationButton>

                {pages > page + 1 && paginationPages.indexOf(page + 1) === -1 && (
                  <span className={styles.separator} aria-current="page">
                    ...
                  </span>
                )}
              </Fragment>
            ))}
            <button
              disabled={next === null}
              onClick={() => onNavigate(next)}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
