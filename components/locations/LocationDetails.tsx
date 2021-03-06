import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Location } from "types";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import CharactersList from "components/characters/CharactersList";
interface LocationDetailsProps {
  location: Location;
}

const LocationDetails = ({ location }: LocationDetailsProps) => {
  return (
    <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
      <div className="flex-1 relative z-0 flex overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
          {/* Breadcrumb */}
          <nav
            className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
            aria-label="Breadcrumb"
          >
            <Link href="/locations">
              <a className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
                <ChevronLeftIcon
                  className="-ml-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Locations</span>
              </a>
            </Link>
          </nav>

          <article>
            {/* Profile header */}
            <div>
              <div>
                <img
                  className="h-32 w-full object-cover lg:h-48"
                  src={location.residents[0].image}
                  alt=""
                />
              </div>
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                  <div className="flex">
                    <img
                      className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                      src={location.residents[0].image}
                      alt=""
                    />
                  </div>
                  <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                      <h1 className="text-2xl font-bold text-gray-900 truncate">
                        {location.name}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                    {location.name}
                  </h1>
                </div>
              </div>
            </div>
            <div className="mt-8 max-w-6xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
              <h2 className="text-sm font-medium text-gray-500">Residents</h2>
              <CharactersList characters={location.residents} />
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

LocationDetails.displayName = "LocationDetails";

LocationDetails.propTypes = {};

export default LocationDetails;
