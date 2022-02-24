import React from 'react'
import { Character } from 'types'
import { ChevronLeftIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'

interface CharacterProps {
  character: Character
}

const CharacterDetails = ({ character }: CharacterProps) => {
  return (
    <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
      <div className="flex-1 relative z-0 flex overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
          {/* Breadcrumb */}
          <nav
            className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
            aria-label="Breadcrumb"
          >
            <a
              href="#"
              className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
            >
              <ChevronLeftIcon
                className="-ml-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>Directory</span>
            </a>
          </nav>

          <article>
            {/* Profile header */}
            <div>
              <div>
                <img
                  className="h-32 w-full object-cover lg:h-48"
                  src={character.image}
                  alt=""
                />
              </div>
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                  <div className="flex">
                    <img
                      className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                      src={character.image}
                      alt=""
                    />
                  </div>
                  <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                      <h1 className="text-2xl font-bold text-gray-900 truncate">
                        {character.name}
                      </h1>
                    </div>
                    <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      >
                        <MailIcon
                          className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>Message</span>
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      >
                        <PhoneIcon
                          className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>Call</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                    {character.name}
                  </h1>
                </div>
              </div>
            </div>

            {/* Tabs 
            <div className="mt-6 sm:mt-2 2xl:mt-5">
              <div className="border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map((tab) => (
                      <a
                        key={tab.name}
                        href={tab.href}
                        className={classNames(
                          tab.current
                            ? 'border-pink-500 text-gray-900'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                          'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                        )}
                        aria-current={tab.current ? 'page' : undefined}
                      >
                        {tab.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>*/}

            {/* Description list 
            <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                {Object.keys(profile.fields).map((field) => (
                  <div key={field} className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      {field}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {profile.fields[field]}
                    </dd>
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">About</dt>
                  <dd
                    className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
                    dangerouslySetInnerHTML={{ __html: profile.about }}
                  />
                </div>
              </dl>
            </div>
            */}

            {/* Team member list */}
            <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
              <h2 className="text-sm font-medium text-gray-500">Episodes</h2>
              <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {character.episode.map((episode) => (
                  <div
                    key={episode.id}
                    className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={character.image}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">
                          {episode.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {new Date(episode.air_date).toDateString()}
                        </p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}

CharacterDetails.displayName = 'CharacterDetails'

CharacterDetails.propTypes = {}

export default CharacterDetails
