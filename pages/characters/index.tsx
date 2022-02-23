import { gql, useQuery } from '@apollo/client'
import Loader from 'components/ui/Loader'
import CharactersList from 'components/characters/CharactersList'

const characterQuery = gql`
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
      }
    }
  }
`

const CharactersPage = (props) => {
  const { loading, data, refetch } = useQuery(characterQuery, {})
  if (loading) {
    return <Loader />
  }
  const {
    characters: { results: characters, info },
  } = data
  debugger
  return (
    <div>
      <CharactersList characters={characters} pageInfo={info} />
    </div>
  )
}

export default CharactersPage
