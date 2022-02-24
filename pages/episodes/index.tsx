import { useRouter } from 'next/router'
import Loader from 'components/ui/Loader'
import EpisodesList from 'components/episodes/EpisodesList'
import { useEpisodes } from 'graphql/hooks'
import Pagination from 'components/ui/Pagination'
import { PageInfo } from 'types'

const EpisodesPage = (props) => {
  const router = useRouter()
  const {
    query: { page = 1 },
  } = router
  const { loading, data, previousData } = useEpisodes({
    variables: { page: Number(page) },
    skip: isNaN(Number(page)),
  })
  if (loading && !previousData) {
    return <Loader variant="linear" />
  }
  const {
    episodes: { info, results: episodes },
  } = data || previousData
  const pageInfo: PageInfo = {
    ...info,
    items: episodes.length,
    current: Number(page),
  }
  function handleNavigate(page: string) {
    router.push(
      { pathname: router.pathname, query: { ...router.query, page } },
      undefined,
      { shallow: true }
    )
  }
  return (
    <>
      <Pagination pageInfo={pageInfo} onNavigate={handleNavigate} />
      {loading && <Loader variant="linear" />}
      <EpisodesList loading={loading} episodes={episodes} />
      <Pagination pageInfo={pageInfo} onNavigate={handleNavigate} />
    </>
  )
}

export default EpisodesPage
