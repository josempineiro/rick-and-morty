import Filter from "components/ui/Filter";

const CharactersFilter = (props) => {
  return (
    <Filter
      title="Filter characters"
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
          type: "select",
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
          type: "select",
          hint: "Filter by species",
          placeholder: "Select an specie",
          options: [
            { label: "Human", value: "Human" },
            { label: "Alien", value: "Alien" },
            { label: "Unknown", value: "unknown" },
          ],
        },
        ,
        {
          label: "Gender",
          name: "gender",
          type: "select",
          hint: "Filter by gender",
          placeholder: "Select an gender",
          options: [
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Genderless", value: "Genderless" },
          ],
        },
      ]}
      {...props}
    />
  );
};

export default CharactersFilter;
