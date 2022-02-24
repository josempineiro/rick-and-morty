import { useQuery, gql } from '@apollo/client'

const episodesQuery = gql`
  query episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        pages
        count
        next
        prev
      }
      results {
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

const useEpisodes = (options) => {
  return useQuery(episodesQuery, options)
}

export default useEpisodes
