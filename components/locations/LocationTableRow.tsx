import React from "react";
import { Location } from "types";
import Link from "next/link";
import { DocumentSearchIcon } from "@heroicons/react/outline";
interface CharacterTableRowProps {
  row: Location;
}

const LocationTableRow = ({ row: location }: CharacterTableRowProps) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{location.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{location.dimension}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {location.residents.length}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(location.created).toDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link href={`/locations/${location.id}`}>
          <a className="text-cyan-600 hover:text-cyan-900">
            <DocumentSearchIcon className="w-6 h-6" />
          </a>
        </Link>
      </td>
    </tr>
  );
};

LocationTableRow.displayName = "LocationTableRow";

export default LocationTableRow;
