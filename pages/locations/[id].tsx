import { useRouter } from "next/router";
import Loader from "components/ui/Loader";
import Page from "components/ui/Page";
import LocationDetails from "components/locations/LocationDetails";
import { useLocation } from "graphql/hooks";

const LocationPage = (props) => {
  const {
    query: { id },
  } = useRouter();

  const { loading, data, error } = useLocation({ variables: { id } });
  if (loading) {
    return <Loader variant="linear" />;
  } else if (error) {
    return "error";
  }
  const { location } = data;
  return (
    <Page
      title={location.name}
      breadcrumbs={[{ id: "locations", href: "/locations", text: "Locations" }]}
    >
      <LocationDetails location={location} />
    </Page>
  );
};

export default LocationPage;
