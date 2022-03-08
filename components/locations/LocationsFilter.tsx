import Filter from "components/ui/Filter";

const LocationsFilter = (props) => {
  return (
    <Filter
      className="flex space-x-4 space-y-0 mb-4"
      title="Filter locations"
      filters={[
        {
          label: "Name",
          name: "name",
          type: "text",
          hint: "Filter by name",
          placeholder: "Search for a location",
        },
        {
          label: "Type",
          name: "type",
          type: "select",
          hint: "Filter by type",
          placeholder: "Select a type",
          options: [
            { label: "All types", value: undefined },
            { label: "Type 1", value: "type" },
            { label: "Type 2", value: "type" },
            { label: "Type 3", value: "type" },
            { label: "Type 4", value: "type" },
            { label: "Type 5", value: "type" },
          ],
        },
        {
          label: "Dimension",
          name: "dimension",
          type: "select",
          hint: "Filter by dimension",
          placeholder: "Select a dimension",
          options: [
            { label: "All dimensions", value: undefined },
            { label: "dimension 1", value: "dimension" },
            { label: "dimension 2", value: "dimension" },
            { label: "dimension 3", value: "dimension" },
            { label: "dimension 4", value: "dimension" },
            { label: "dimension 5", value: "dimension" },
          ],
        },
      ]}
      {...props}
    />
  );
};

export default LocationsFilter;
