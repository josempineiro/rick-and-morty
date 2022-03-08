import Filter from "components/ui/Filter";

const CharactersFilter = (props) => {
  return (
    <Filter
      className="flex space-x-4 space-y-0 mb-4"
      title="Filter episodes"
      filters={[
        {
          className: "flex-1",
          label: "Name",
          name: "name",
          type: "text",
          hint: "Filter by name",
          placeholder: "Search for an episode",
        },
        {
          label: "Season",
          name: "episode",
          type: "select",
          hint: "Filter by season",
          placeholder: "Select a season",
          options: [
            { label: "All seasons", value: undefined },
            { label: "Season 1", value: "S01" },
            { label: "Season 2", value: "S02" },
            { label: "Season 3", value: "S03" },
            { label: "Season 4", value: "S04" },
            { label: "Season 5", value: "S05" },
          ],
        },
      ]}
      {...props}
    />
  );
};

export default CharactersFilter;
