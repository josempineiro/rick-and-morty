import React from "react";
import { ChevronRightIcon, MenuAlt2Icon } from "@heroicons/react/solid";
import { useLayoutContext } from "components/ui/Layout";
import Link from "next/link";

interface Breadcrumb {
  id: string;
  text: string;
  href: string;
}

type PageProps = {
  children: React.ReactNode;
  title: string;
  breadcrumbs?: Breadcrumb[];
};

const Page = ({ title, children, breadcrumbs }: PageProps) => {
  const { openSidebar } = useLayoutContext();
  return (
    <div className="md:pl-64 flex flex-col h-full">
      <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          type="button"
          className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 md:hidden"
          onClick={openSidebar}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 flex justify-between overflow-hidden">
          <nav
            className="flex items-center px-4 py-3 sm:px-6 lg:px-8 lg:px-8 text-lg sm:text-2xl font-semibold text-gray-900 overflow-hidden"
            aria-label="Breadcrumb"
          >
            {breadcrumbs &&
              breadcrumbs.map((breadcrumb, index, { length }) => (
                <>
                  <Link href={breadcrumb.href} key={breadcrumb.id}>
                    <a className="inline-flex items-center space-x-3 text-gray-500 hover:text-gray-900">
                      {breadcrumb.text}
                    </a>
                  </Link>
                  {index < length && (
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                </>
              ))}

            <h1 className="truncate">{title}</h1>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto p-4 sm:px-6 md:px-8 flex h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Page;
