import React from 'react'
import { Character } from 'types'
interface CharacterRowProps {
  row: Character
}

const CharacterRow = ({ row: character }: CharacterRowProps) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src={character.image}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {character.name}
            </div>
            <div className="text-sm text-gray-500">{character.status}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{character.type}</div>
        <div className="text-sm text-gray-500">{character.type}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {character.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {character.gender}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-cyan-600 hover:text-cyan-900">
          Edit
        </a>
      </td>
    </tr>
  )
}

CharacterRow.displayName = 'Table'

CharacterRow.propTypes = {}

export default CharacterRow
