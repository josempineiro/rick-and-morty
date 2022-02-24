import { useQuery, gql } from '@apollo/client'

const characterQuery = gql`
  query character($id: ID!) {
    character(id: $id) {
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
      episode {
        id
        name
        created
        episode
        air_date
        characters {
          id
          image
          name
        }
      }
    }
  }
`

const useCharacter = (options) => {
  return useQuery(characterQuery, options)
}

export default useCharacter
