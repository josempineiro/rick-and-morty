import { useQuery, gql } from "@apollo/client";

const locationQuery = gql`
  query location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      created
      residents {
        id
        name
        status
        species
        type
        gender
        image
        created
        location {
          name
        }
      }
    }
  }
`;

const useEpisode = (options) => {
  return useQuery(locationQuery, options);
};

export default useEpisode;
