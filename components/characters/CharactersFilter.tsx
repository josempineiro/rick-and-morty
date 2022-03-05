import Filter from "components/ui/Filter";

const CharactersFilter = (props) => {
  return (
    <Filter
      filters={[
        {
          label: "Name",
          name: "name",
          type: "text",
          hint: "Filter by name",
          placeholder: "Rick",
        },
        {
          label: "Status",
          name: "status",
          type: "radio",
          hint: "Filter by status",
          options: [
            { label: "Alive", value: "alive" },
            { label: "Dead", value: "dead" },
            { label: "Unknown", value: "unknown" },
          ],
        },
        {
          label: "Species",
          name: "species",
          type: "radio",
          hint: "Filter by species",
          placeholder: "Select an specie",
          options: [
            { label: "Human", value: "Human" },
            { label: "Alien", value: "Alien" },
            { label: "Unknown", value: "unknown" },
          ],
        },
      ]}
      {...props}
    />
  );
};

export default CharactersFilter;
