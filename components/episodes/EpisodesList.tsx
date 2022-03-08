import React from "react";
import Table from "components/ui/Table";
import List from "components/ui/List";
import EpisodeTableRow from "./EpisodeTableRow";
import EpisodeListItem from "./EpisodeListItem";
import { Episode } from "types";

interface EpisodesListProps {
  episodes: Episode[];
  loading?: boolean;
  variant?: string;
}

const mapEpisode = (episode) => ({
  ...episode,
  season: `Season ${Number(episode.episode.split("E")[0].replace("S", ""))}`,
});

const EpisodesList = ({
  episodes: rawEpisodes,
  loading,
  variant,
}: EpisodesListProps) => {
  const episodes = rawEpisodes.map(mapEpisode);
  switch (variant) {
    case "table":
      return (
        <Table
          data={episodes}
          headers={["name", "season", "characters", "air on", ""]}
          renderTableRow={EpisodeTableRow}
          loading={loading}
        />
      );
    case "list":
      return (
        <List
          items={episodes}
          renderListItem={EpisodeListItem}
          loading={loading}
        />
      );
    default:
      return (
        <>
          <Table
            className="hidden xl:flex"
            data={episodes}
            headers={["name", "season", "characters", "air on", ""]}
            renderTableRow={EpisodeTableRow}
            loading={loading}
          />
          <List
            className="flex xl:hidden"
            items={episodes}
            renderListItem={EpisodeListItem}
            loading={loading}
          />
        </>
      );
  }
};

EpisodesList.displayName = "EpisodesList";

EpisodesList.propTypes = {};

export default EpisodesList;
