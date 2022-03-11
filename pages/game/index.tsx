import { useState } from "react";
import { useCharactersByIds } from "graphql/hooks";
import Page from "components/ui/Page";
import Modal from "components/ui/overlays/Modal";
import Dialog from "components/ui/overlays/Dialog";
import MemorizeGame from "components/game/MemorizeGame";
import LevelSelector from "components/game/LevelSelector";
import Confetti from "components/ui/Confetti";

import Button from "components/ui/Button";
import {
  ReplyIcon,
  ExclamationIcon,
  CheckIcon,
} from "@heroicons/react/outline";

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
  const [level, setLevel] = useState();
  const [wantFinishGame, setWantFinishGame] = useState(false);
  const [finishedGame, setFinishedGame] = useState(false);

  const { data, loading } = useCharactersByIds({
    variables: {
      ids: ids,
    },
  });

  function handleChangeLevel({ value }) {
    setLevel(value);
  }

  function handleRetryGame() {
    setWantFinishGame(true);
  }
  function handleFinishGame() {
    setFinishedGame(true);
  }
  function handleAbortGame() {
    setFinishedGame(false);
    setLevel(undefined);
    setWantFinishGame(false);
  }
  function handleContinueGame() {
    setWantFinishGame(false);
    setFinishedGame(false);
  }
  function handleCancelGame() {
    setWantFinishGame(false);
    setFinishedGame(false);
    setLevel(undefined);
  }

  if (loading) {
    return null;
  }

  return (
    <Page
      title={"Rick and Morty"}
      actions={
        <Button variant="clear" size="small" rounded onClick={handleRetryGame}>
          <ReplyIcon className="h-6 w-6" />
        </Button>
      }
    >
      <Modal visible={!level}>
        <div className="px-4 pt-5 pb-4  sm:p-6">
          <LevelSelector onChange={handleChangeLevel} />
        </div>
      </Modal>
      {finishedGame && <Confetti />}
      <Dialog
        visible={Boolean(wantFinishGame && level)}
        onClose={handleContinueGame}
        icon={
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <ExclamationIcon
              className="h-6 w-6 text-red-600"
              aria-hidden="true"
            />
          </div>
        }
        title={"Finish game"}
        message={"Are you sure you want finish the game?"}
        accept={{
          variant: "danger",
          onClick: handleAbortGame,
        }}
        cancel={{
          variant: "tertiary",
          onClick: handleContinueGame,
        }}
      />

      <Dialog
        visible={finishedGame}
        onClose={handleCancelGame}
        icon={
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
        }
        title={"Great!"}
        message={"Try again and see if you can do better!"}
        accept={{
          variant: "primary",
          onClick: handleAbortGame,
        }}
      />
      {level && !finishedGame && (
        <MemorizeGame
          items={data.charactersByIds}
          level={level}
          onFinishGame={handleFinishGame}
        />
      )}
    </Page>
  );
};

export default MemorizeGamePage;
