/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { Episode } from 'types'
interface EpisodeListItemProps {
  item: Episode
}

export default function EpisodeListItem({
  item: episode,
}: EpisodeListItemProps) {
  return (
    <li>
      <Link href={`/episodes/${episode.id}`}>
        <a className="block hover:bg-gray-50">
          <div className="px-4 py-4 flex items-center sm:px-6">
            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
              <div className="truncate">
                <div className="flex text-sm">
                  <p className="font-medium text-cyan-600 truncate">
                    {episode.name}
                  </p>
                </div>
                <div className="mt-2 flex">
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <p>
                      Broadcast live on{' '}
                      <time dateTime={episode.air_date}>
                        {new Date(episode.air_date).toDateString()}
                      </time>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                <div className="flex overflow-hidden -space-x-1">
                  {episode.characters.slice(0, 5).map((character) => (
                    <Link
                      key={character.id}
                      href={`/characters/${character.id}`}
                    >
                      <span className="inline-flex items-center justify-center h-6 w-6">
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src={character.image}
                          alt={character.name}
                        />
                      </span>
                    </Link>
                  ))}
                  {episode.characters.slice(5).length > 0 && (
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-500">
                      <span className="text-xs font-medium leading-none text-white">{`+${
                        episode.characters.slice(5).length
                      }`}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="ml-5 flex-shrink-0">
              <ChevronRightIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </div>
        </a>
      </Link>
    </li>
  )
}
