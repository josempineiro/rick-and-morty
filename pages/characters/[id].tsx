import { useCharacter } from "graphql/hooks";
import { useRouter } from "next/router";
import Loader from "components/ui/Loader";
import Page from "components/ui/Page";
import CharacterDetails from "components/characters/CharacterDetails";

const CharacterPage = (props) => {
  const {
    query: { id },
  } = useRouter();

  const { loading, data, error } = useCharacter({ variables: { id } });
  if (loading) {
    return <Loader variant="linear" />;
  } else if (error) {
    return "error";
  }
  const { character } = data;
  return (
    <Page
      title={character.name}
      breadcrumbs={[
        { id: "characters", href: "/characters", text: "Characters" },
      ]}
    >
      <CharacterDetails character={character} />
    </Page>
  );
};

export default CharacterPage;
