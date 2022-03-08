import React from "react";
import Table from "components/ui/Table";
import List from "components/ui/List";
import Grid from "components/ui/Grid";
import CharacterTableRow from "./CharacterTableRow";
import CharacterListItem from "./CharacterListItem";
import CharacterGridItem from "./CharacterGridItem";
import { Character } from "types";

interface CharactersProps {
  characters: Character[];
  loading?: boolean;
  variant?: string;
}

const Characters = ({ characters, loading, variant }: CharactersProps) => {
  switch (variant) {
    case "table":
      return (
        <Table
          data={characters}
          headers={[
            "Name",
            "Status",
            "Gender",
            "Specie and type",
            "Last known location",
            "",
          ]}
          renderTableRow={CharacterTableRow}
          loading={loading}
        />
      );
    case "list":
      return (
        <List
          items={characters}
          renderListItem={CharacterListItem}
          loading={loading}
        />
      );
    case "grid":
      return (
        <Grid
          items={characters}
          renderGridItem={CharacterGridItem}
          loading={loading}
        />
      );
    default:
      return (
        <>
          <Table
            className="hidden xl:flex"
            data={characters}
            headers={[
              "Name",
              "Status",
              "Gender",
              "Specie and type",
              "Last known location",
              "",
            ]}
            renderTableRow={CharacterTableRow}
            loading={loading}
          />
          <List
            className="flex xl:hidden"
            items={characters}
            renderListItem={CharacterListItem}
            loading={loading}
          />
        </>
      );
  }
};

Characters.displayName = "Characters";

Characters.propTypes = {};

export default Characters;
