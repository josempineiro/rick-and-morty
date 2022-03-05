import { useRouter } from "next/router";
import Loader from "components/ui/Loader";
import Page from "components/ui/Page";
import EpisodeDetails from "components/episodes/EpisodeDetails";
import { useEpisode } from "graphql/hooks";

const EpisodePage = (props) => {
  const {
    query: { id },
  } = useRouter();

  const { loading, data, error } = useEpisode({ variables: { id } });
  if (loading) {
    return <Loader variant="linear" />;
  } else if (error) {
    return "error";
  }
  const { episode } = data;
  return (
    <Page
      title={episode.name}
      breadcrumbs={[{ id: "episodes", href: "/episodes", text: "Episodes" }]}
    >
      <EpisodeDetails episode={episode} />
    </Page>
  );
};

export default EpisodePage;
