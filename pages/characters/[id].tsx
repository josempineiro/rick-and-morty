import Loader from 'components/ui/Loader'
import CharacterDetails from 'components/characters/CharacterDetails'
import { useCharacter } from 'graphql/hooks'
import { useRouter } from 'next/router'

const CharacterPage = (props) => {
  const {
    query: { id },
  } = useRouter()

  const { loading, data, error } = useCharacter({ variables: { id } })
  if (loading) {
    return <Loader variant="linear" />
  } else if (error) {
    return 'error'
  }
  const { character } = data
  return <CharacterDetails character={character} />
}

export default CharacterPage
