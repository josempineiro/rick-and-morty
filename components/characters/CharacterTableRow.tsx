import React from "react";
import { Character } from "types";
import Link from "next/link";
import CharacterStatus from "./CharacterStatus";
import { DocumentSearchIcon } from "@heroicons/react/outline";
interface CharacterTableRowProps {
  row: Character;
}

const CharacterTableRow = ({ row: character }: CharacterTableRowProps) => {
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
            <span className="text-sm font-medium text-gray-900">
              {character.name}
            </span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <CharacterStatus character={character} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {character.gender}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="text-sm text-gray-500">{character.species}</div>
        <div className="text-sm font-medium text-gray-400">
          {character.type}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          <Link href={`/locations/${character.location.id}`}>
            <a>{character.location.name}</a>
          </Link>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link href={`/characters/${character.id}`}>
          <a className="text-cyan-600 hover:text-cyan-900 text-right">
            <DocumentSearchIcon className="w-6 h-6" />
          </a>
        </Link>
      </td>
    </tr>
  );
};

CharacterTableRow.displayName = "CharacterTableRow";

export default CharacterTableRow;
