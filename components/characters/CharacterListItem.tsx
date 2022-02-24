/* This example requires Tailwind CSS v2.0+ */
import { UserIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { Character } from 'types'
import CharacterStatus from './CharacterStatus'
interface CharacterListItemProps {
  item: Character
}

export default function CharacterListItem({
  item: character,
}: CharacterListItemProps) {
  return (
    <li key={character.id}>
      <Link href={`/characters/${character.id}`}>
        <a className="block hover:bg-gray-50">
          <div className="flex items-center px-4 py-4 sm:px-6">
            <div className="min-w-0 flex-1 flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src={character.image}
                  alt=""
                />
              </div>
              <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p className="text-sm font-medium text-indigo-600 truncate">
                    {character.name}
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    <UserIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="truncate">{character.species}</span>
                  </p>
                </div>
                <div className="hidden md:block">
                  <div>
                    <p className="text-sm text-gray-900 truncate">
                      Created on{' '}
                      <time dateTime={character.created}>
                        {new Date(character.created).toDateString()}
                      </time>
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500">
                      <CharacterStatus character={character} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
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
