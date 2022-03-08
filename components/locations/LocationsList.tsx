import React from "react";
import Table from "components/ui/Table";
import List from "components/ui/List";
import LocationTableRow from "./LocationTableRow";
import LocationListItem from "./LocationListItem";
import { Location } from "types";

interface LocationsListProps {
  locations: Location[];
  loading?: boolean;
  variant?: string;
}

const LocationsList = ({ locations, loading, variant }: LocationsListProps) => {
  switch (variant) {
    case "table":
      return (
        <Table
          data={locations}
          headers={["name", "season", "characters", "Created", ""]}
          renderTableRow={LocationTableRow}
          loading={loading}
        />
      );
    case "list":
      return (
        <List
          items={locations}
          renderListItem={LocationListItem}
          loading={loading}
        />
      );
    default:
      return (
        <>
          <Table
            className="hidden xl:flex"
            data={locations}
            headers={["name", "season", "characters", "Created", ""]}
            renderTableRow={LocationTableRow}
            loading={loading}
          />
          <List
            className="flex xl:hidden"
            items={locations}
            renderListItem={LocationListItem}
            loading={loading}
          />
        </>
      );
  }
};

LocationsList.displayName = "LocationsList";

LocationsList.propTypes = {};

export default LocationsList;
