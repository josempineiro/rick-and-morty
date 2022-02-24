import React from 'react'
import { Episode } from 'types'
import Link from 'next/link'
interface CharacterTableRowProps {
  row: Episode
}

const EpisodeTableRow = ({ row: episode }: CharacterTableRowProps) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{episode.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{episode.episode}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {episode.characters.length}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(episode.air_date).toDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link href={`/episodes/${episode.id}`}>
          <a className="text-cyan-600 hover:text-cyan-900">Details</a>
        </Link>
      </td>
    </tr>
  )
}

EpisodeTableRow.displayName = 'EpisodeTableRow'

export default EpisodeTableRow
