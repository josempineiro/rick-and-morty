import { useRouter } from "next/router";
import Loader from "components/ui/Loader";
import Page from "components/ui/Page";
import Pagination from "components/ui/Pagination";
import LocationsList from "components/locations/LocationsList";
import LocationsFilter from "components/locations/LocationsFilter";
import { useLocations } from "graphql/hooks";
import { PageInfo } from "types";

const LocationsPage = (props) => {
  const router = useRouter();

  const {
    query: { page = 1, ...filter },
  } = router;

  const { loading, data, previousData } = useLocations({
    variables: { page: Number(page), filter },
    skip: isNaN(Number(page)),
  });

  if (loading && !previousData) {
    return <Loader variant="linear" />;
  }

  const {
    locations: { info, results: locations },
  } = data || previousData;

  const pageInfo: PageInfo = {
    ...info,
    items: locations.length,
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
    <Page title="Locations">
      {loading && <Loader variant="linear" />}
      <LocationsFilter inline filterValues={filter} onSubmit={handleFilter} />
      <LocationsList loading={loading} locations={locations} />
      <Pagination pageInfo={pageInfo} onNavigate={handleNavigate} />
    </Page>
  );
};

export default LocationsPage;
