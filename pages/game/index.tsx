import { useState, useRef, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCharactersByIds } from "graphql/hooks";
import Dialog from "components/ui/overlays/Dialog";
import MemorizeGame from "components/game/MemorizeGame";
import LevelSelector from "components/game/LevelSelector";
import Confetti from "components/ui/Confetti";

import Button from "components/ui/Button";
import {
  HomeIcon,
  ReplyIcon,
  ExclamationIcon,
  CheckIcon,
  ClockIcon,
  SwitchHorizontalIcon,
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
  const router = useRouter();
  const [ids, setIds] = useState(randomIds(48));
  const [level, setLevel] = useState();
  const [wantFinishGame, setWantFinishGame] = useState(false);
  const [finishedGame, setFinishedGame] = useState(undefined);

  const { data, loading } = useCharactersByIds({
    skip: !level,
    variables: {
      ids: ids,
    },
  });

  function handleExitGame() {
    router.push({ pathname: "/" }, undefined, { shallow: true });
  }

  function handleChangeLevel({ value }) {
    setIds(randomIds(48));
    setLevel(value);
  }

  function handleRetryGame() {
    setWantFinishGame(true);
  }

  const wooVuAudio = useRef();
  const youWinAudio = useRef();
  function handleFinishGame(game) {
    if (Math.random() > 0.5) {
      wooVuAudio.current.play();
    } else {
      youWinAudio.current.play();
    }
    debugger;
    setFinishedGame(game);
  }
  function handleAbortGame() {
    setFinishedGame(undefined);
    setLevel(undefined);
    setWantFinishGame(false);
  }
  function handleContinueGame() {
    setWantFinishGame(false);
    setFinishedGame(undefined);
  }
  function handleCancelGame() {
    setWantFinishGame(false);
    setFinishedGame(undefined);
    setLevel(undefined);
  }

  if (loading) {
    return null;
  }

  return (
    <div className="flex flex-col h-full overflow-auto">
      <div className="sticky top-0 z-10 flex-shrink-0 flex h-12 sm:h-16 bg-white shadow">
        <div className="max-w-7xl mx-auto flex w-full justify-between items-center">
          <Link href="/" passHref={false}>
            <Button
              variant="clear"
              size="small"
              rounded
              onClick={handleRetryGame}
            >
              <HomeIcon className="h-6 w-6" />
            </Button>
          </Link>
          <Button
            variant="clear"
            size="small"
            rounded
            onClick={handleRetryGame}
          >
            <ReplyIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto flex flex-col">
          <Dialog
            visible={!level}
            cancel={{
              variant: "danger",
              onClick: handleExitGame,
              children: "Exit",
            }}
            title={"Select level"}
            message={"Select a level to start the game"}
            content={
              <div className="px-4 sm:px-6 mb-4">
                <LevelSelector onChange={handleChangeLevel} />
              </div>
            }
          />
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

          <audio ref={wooVuAudio}>
            <source src="/audio/woo_vu_luvub_dub_dub.wav" type="audio/wav" />
          </audio>
          <audio ref={youWinAudio}>
            <source src="/audio/you-win.mp3" type="audio/wav" />
          </audio>
          <Dialog
            visible={Boolean(finishedGame)}
            onClose={handleCancelGame}
            icon={
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                <CheckIcon
                  className="h-6 w-6 text-green-600"
                  aria-hidden="true"
                />
              </div>
            }
            title={"Great!"}
            message={"Try again and see if you can do better!"}
            content={
              <div className="flex justify-around gap-8 mb-4 max-w-xs mx-auto px-4">
                <div className="relative flex flex-1 items-center justify-center flex-col rounded-lg shadow-lg bg-white py-2 px-4">
                  <span className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 p-1 rounded-full bg-white shadow-lg">
                    <ClockIcon className=" h-4 w-4 text-gray-500 " />
                  </span>
                  <span className="text-2xl text-center text-cyan-600">
                    {finishedGame?.time}
                  </span>
                </div>
                <div className="relative flex flex-1 items-center justify-center flex-col rounded-lg shadow-lg bg-white py-2 px-4">
                  <span className="text-2xl text-center whitespace-pre text-cyan-600">
                    {finishedGame?.cards} / {finishedGame?.cards}
                  </span>
                </div>
                <div className="relative flex flex-1 items-center justify-center flex-col rounded-lg shadow-lg bg-white py-2 px-4">
                  <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 p-1 rounded-full bg-white shadow-lg">
                    <SwitchHorizontalIcon className="h-4 w-4 text-gray-500" />
                  </span>
                  <span className="text-2xl text-center text-cyan-600">
                    {finishedGame?.steps}
                  </span>
                </div>
              </div>
            }
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
        </div>
      </main>
    </div>
  );
};

MemorizeGamePage.Layout = Fragment;

export default MemorizeGamePage;
