import { useQuery } from '@apollo/client'
import charactersQuery from 'graphql/queries/characters.graphql'

const useCharacters = (options) => {
  return useQuery(charactersQuery, options)
}

export default useCharacters
