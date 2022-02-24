import Loader from 'components/ui/Loader'
import CharactersList from 'components/characters/CharactersList'
import { useCharacters } from 'graphql/hooks'
import { useRouter } from 'next/router'

const CharactersPage = (props) => {
  const {
    query: { page },
  } = useRouter()
  const { loading, data } = useCharacters({ variables: { page } })
  if (loading) {
    return <Loader />
  }
  const {
    characters: { info, results: characters },
  } = data
  const pageInfo = {
    ...info,
    items: characters.length,
    page,
  }
  return (
    <div>
      <CharactersList characters={characters} />
    </div>
  )
}

export default CharactersPage
