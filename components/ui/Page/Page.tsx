import { Fragment } from "react";
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
        <div className="flex-1 flex items-center py-4 px-8 justify-between overflow-hidden">
          <h1 className="text-2xl truncate">{title}</h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto p-4 sm:px-6 md:px-8 flex flex-col h-full">
          {breadcrumbs && (
            <nav
              className="flex items-center text-gray-500 text-sm font-medium space-x-2 whitespace-nowrap mb-4"
              aria-label="Breadcrumb"
            >
              {breadcrumbs.map((breadcrumb, index, { length }) => (
                <Fragment key={breadcrumb.id}>
                  <Link href={breadcrumb.href}>
                    <a className="inline-flex items-center space-x-3 text-gray-500 hover:text-gray-900">
                      {breadcrumb.text}
                    </a>
                  </Link>
                  {index + 1 < length && (
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                </Fragment>
              ))}
            </nav>
          )}
          {children}
        </div>
      </main>
    </div>
  );
};

export default Page;
