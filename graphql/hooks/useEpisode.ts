import { useQuery, gql } from '@apollo/client'

const episodeQuery = gql`
  query episode($id: ID!) {
    episode(id: $id) {
      id
      name
      created
      episode
      air_date
      characters {
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
  }
`

const useEpisode = (options) => {
  return useQuery(episodeQuery, options)
}

export default useEpisode
