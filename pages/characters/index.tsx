import { useEffect, useMemo } from "react";
import _ from "lodash";
import { useRouter } from "next/router";
import { PageInfo } from "types";
import Loader from "components/ui/Loader";
import Pagination from "components/ui/Pagination";
import Page from "components/ui/Page";
import { useCharacters } from "graphql/hooks";
import CharactersList from "components/characters/CharactersList";
import CharactersFilter from "components/characters/CharactersFilter";

const CharactersPage = (props) => {
  const router = useRouter();
  const {
    query: { page = 1, ...filter },
  } = router;
  const { loading, data, previousData } = useCharacters({
    variables: { page: Number(page), filter },
    skip: isNaN(Number(page)),
  });
  if (loading && !previousData) {
    return <Loader variant="linear" />;
  }
  const {
    characters: { info, results: characters },
  } = data || previousData;

  const pageInfo: PageInfo = {
    ...info,
    items: characters.length,
    current: Number(page),
  };
  function handleNavigate(page: string) {
    router.push(
      { pathname: router.pathname, query: { ...router.query, page } },
      undefined,
      { shallow: true }
    );
  }
  function handleFilter(filter: any) {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, page: 1, ...filter },
      },
      undefined,
      { shallow: true }
    );
  }
  return (
    <Page title="Characters">
      {loading && <Loader variant="linear" />}
      <CharactersFilter filterValues={filter} onSubmit={handleFilter} />
      <CharactersList loading={loading} characters={characters} />
      <Pagination pageInfo={pageInfo} onNavigate={handleNavigate} />
    </Page>
  );
};

export default CharactersPage;
