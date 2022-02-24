import { useRouter } from 'next/router'
import Loader from 'components/ui/Loader'
import CharactersList from 'components/characters/CharactersList'
import { useCharacters } from 'graphql/hooks'
import Pagination from 'components/ui/Pagination'
import { PageInfo } from 'types'
import { useEffect } from 'react'

const CharactersPage = (props) => {
  const router = useRouter()
  const {
    query: { page },
  } = router
  const { loading, data, previousData } = useCharacters({
    variables: { page: Number(page) },
  })
  if (loading && !previousData) {
    return <Loader variant="linear" />
  }
  const {
    characters: { info, results: characters },
  } = data || previousData
  const pageInfo: PageInfo = {
    ...info,
    items: characters.length,
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
      <CharactersList loading={loading} characters={characters} />
      <Pagination pageInfo={pageInfo} onNavigate={handleNavigate} />
    </>
  )
}

export default CharactersPage
