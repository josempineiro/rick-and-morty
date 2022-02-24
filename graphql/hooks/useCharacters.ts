import { useQuery, gql } from '@apollo/client'

const charactersQuery = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        pages
        count
        next
        prev
      }
      results {
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

const useCharacters = (options) => {
  return useQuery(charactersQuery, options)
}

export default useCharacters
