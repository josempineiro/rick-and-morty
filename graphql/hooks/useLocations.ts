import { useQuery, gql } from "@apollo/client";

const locationsQuery = gql`
  query locations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        created
        residents {
          id
          name
          image
          location {
            name
          }
        }
      }
    }
  }
`;

const useLocations = (options) => {
  return useQuery(locationsQuery, options);
};

export default useLocations;
