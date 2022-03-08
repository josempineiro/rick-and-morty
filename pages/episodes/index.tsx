import { useRouter } from "next/router";
import Loader from "components/ui/Loader";
import Page from "components/ui/Page";
import Pagination from "components/ui/Pagination";
import EpisodesList from "components/episodes/EpisodesList";
import EpisodesFilter from "components/episodes/EpisodesFilter";
import { useEpisodes } from "graphql/hooks";
import { PageInfo } from "types";

const EpisodesPage = (props) => {
  const router = useRouter();

  const {
    query: { page = 1, ...filter },
  } = router;

  const { loading, data, previousData } = useEpisodes({
    variables: { page: Number(page), filter },
    skip: isNaN(Number(page)),
  });

  if (loading && !previousData) {
    return <Loader variant="linear" />;
  }

  const {
    episodes: { info, results: episodes },
  } = data || previousData;

  const pageInfo: PageInfo = {
    ...info,
    items: episodes.length,
    current: Number(page),
  };
  function handleNavigate(page: string) {
    router.push(
      { pathname: router.pathname, query: { ...filter, page } },
      undefined,
      { shallow: true }
    );
  }
  function handleFilter(filter: any) {
    router.push(
      {
        pathname: router.pathname,
        query: { ...filter, page: 1, ...filter },
      },
      undefined,
      { shallow: true }
    );
  }
  return (
    <Page title="Episodes">
      {loading && <Loader variant="linear" />}
      <EpisodesFilter inline filterValues={filter} onSubmit={handleFilter} />
      <EpisodesList loading={loading} episodes={episodes} />
      <Pagination pageInfo={pageInfo} onNavigate={handleNavigate} />
    </Page>
  );
};

export default EpisodesPage;
