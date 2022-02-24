import Loader from 'components/ui/Loader'
import EpisodeDetails from 'components/episodes/EpisodeDetails'
import { useEpisode } from 'graphql/hooks'
import { useRouter } from 'next/router'

const EpisodePage = (props) => {
  const {
    query: { id },
  } = useRouter()

  const { loading, data, error } = useEpisode({ variables: { id } })
  if (loading) {
    return <Loader variant="linear" />
  } else if (error) {
    return 'error'
  }
  const { episode } = data
  return <EpisodeDetails episode={episode} />
}

export default EpisodePage
