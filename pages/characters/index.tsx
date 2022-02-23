import Loader from 'components/ui/Loader'
import CharactersList from 'components/characters/CharactersList'
import { useCharacters } from 'graphql/hooks'

const CharactersPage = (props) => {
  const { loading, data } = useCharacters()
  if (loading) {
    return <Loader />
  }
  const {
    characters: { info: pageInfo, results: characters },
  } = data
  return (
    <div>
      <CharactersList characters={characters} pageInfo={pageInfo} />
    </div>
  )
}

export default CharactersPage
