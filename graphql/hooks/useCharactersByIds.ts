import { useQuery, gql } from "@apollo/client";

const charactersByIdsQuery = gql`
  query charactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
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
        id
      }
    }
  }
`;

const useCharactersByIds = (options) => {
  return useQuery(charactersByIdsQuery, options);
};

export default useCharactersByIds;
