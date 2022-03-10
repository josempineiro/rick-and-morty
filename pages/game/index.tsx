import { useState } from "react";
import { useCharactersByIds } from "graphql/hooks";
import Page from "components/ui/Page";
import MemorizeGame from "components/game/MemorizeGame";

type Props = {};

const randomIds = (total) => {
  var ids = [];
  while (ids.length < total) {
    const candidateId = Math.floor(Math.random() * 824) + 1;
    if (ids.indexOf(candidateId) === -1) {
      ids.push(candidateId);
    }
  }
  return ids;
};

const MemorizeGamePage = (props: Props) => {
  const [ids] = useState(randomIds(48));
  const [level, setLevel] = useState(MemorizeGame.levels.hard);

  const { data, loading } = useCharactersByIds({
    variables: {
      ids: ids,
    },
  });

  if (loading) {
    return null;
  }

  return (
    <Page title={"Rick and Morty memo game"}>
      <MemorizeGame items={data.charactersByIds} level={level} />
    </Page>
  );
};

export default MemorizeGamePage;
