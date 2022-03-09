import { Fragment, useEffect, useState } from "react";
import _ from "lodash";
import { Transition } from "@headlessui/react";
import { SwitchHorizontalIcon, ClockIcon } from "@heroicons/react/outline";
import { useCharactersByIds } from "graphql/hooks";
import classNames from "classnames";
import styles from "components/ui/Card/Card.module.css";
import Page from "components/ui/Page";

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

const MemorizeGame = (props: Props) => {
  const [ids] = useState(randomIds(12));
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState(undefined);
  const [cards, setCards] = useState([]);
  const [steps, setSteps] = useState(0);
  const { data, loading } = useCharactersByIds({
    variables: {
      ids: ids,
    },
    onCompleted: ({ charactersByIds }) => {
      setCards(
        _.shuffle([...charactersByIds, ...charactersByIds]).map(
          (character, index) => ({ ...character, index })
        )
      );
    },
  });
  const [selected, setSelected] = useState(undefined);
  const [compare, setCompare] = useState(undefined);
  const [resolved, setResolved] = useState([]);

  const handleClick = (character) => {
    if (!isVisible(character)) {
      if (selected === undefined) {
        setSelected(character);
      } else if (compare === undefined) {
        setCompare(character);
      }
    }
  };
  useEffect(() => {
    if (selected && !timeInterval) {
      const startTime = new Date().getTime();
      setTime(0);
      const interval = setInterval(() => {
        setTime(Math.round((new Date().getTime() - startTime) / 1000));
      }, 1000);
      setTimeInterval(interval);
    }
  }, [selected, timeInterval]);

  useEffect(() => {
    if (selected !== undefined && compare !== undefined) {
      if (selected.id === compare.id) {
        setResolved((resolved) => [...resolved, selected, compare]);
      }
      setTimeout(() => {
        setSelected(undefined);
        setCompare(undefined);
        setSteps((steps) => steps + 1);
      }, 400);
    }
  }, [selected, compare]);

  useEffect(() => {
    if (resolved.length === cards.length) {
      clearInterval(timeInterval);
    }
  });

  const isVisible = (character) => {
    if (
      resolved.find(
        (resolvedCharacter) => resolvedCharacter.index === character.index
      )
    ) {
      return true;
    } else if (selected === character) {
      return true;
    } else if (compare === character) {
      return true;
    }
    return false;
  };

  if (loading) {
    return null;
  }

  return (
    <Page title={"Rick and Morty memo game"}>
      <div className="w-full p-2 sm:p-10">
        <div className="flex justify-around gap-8 mb-4">
          <div className="flex flex-1 items-center justify-center flex-col rounded-lg shadow-lg bg-white py-2 px-4">
            <ClockIcon className="h-6 w-6" />
            <span className="text-2xl text-center">{time}</span>
          </div>
          <div className="flex flex-1 items-center justify-center flex-col rounded-lg shadow-lg bg-white py-2 px-4">
            <span className="text-2xl text-center">
              {resolved.length / 2} / {cards.length / 2}
            </span>
          </div>
          <div className="flex flex-1 items-center justify-center flex-col rounded-lg shadow-lg bg-white py-2 px-4">
            <SwitchHorizontalIcon className="h-6 w-6" />
            <span className="text-2xl text-center">{steps}</span>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2 max-w-3xl my-0 mx-auto">
          {cards.map((character, index) => {
            return (
              <div
                key={`${character.index}`}
                onClick={() => handleClick(character)}
                className={classNames(
                  "w-full aspect-w-1 aspect-h-1 bg-gray-900 rounded-lg overflow-hidden"
                )}
              >
                <Transition
                  as={Fragment}
                  show={isVisible(character)}
                  enter={styles.enter}
                  enterFrom={styles.enterFrom}
                  enterTo={styles.enterTo}
                  leave={styles.leave}
                  leaveFrom={styles.leaveFrom}
                  leaveTo={styles.leaveTo}
                >
                  <img
                    onDragStart={(event) => {
                      event.preventDefault();
                    }}
                    src={character.image}
                    className={classNames(
                      "object-cover w-full h-full object-center  group-hover:opacity-75 user-select-none"
                    )}
                  />
                </Transition>
                <Transition
                  as={Fragment}
                  show={!isVisible(character)}
                  enter={styles.enter}
                  enterFrom={styles.enterFrom}
                  enterTo={styles.enterTo}
                  leave={styles.leave}
                  leaveFrom={styles.leaveFrom}
                  leaveTo={styles.leaveTo}
                >
                  <img
                    onDragStart={(event) => {
                      event.preventDefault();
                    }}
                    src={"/card.jpeg"}
                    className={classNames(
                      "object-cover w-full h-full object-center  group-hover:opacity-75 user-select-none"
                    )}
                  />
                </Transition>
              </div>
            );
          })}
        </div>
      </div>
    </Page>
  );
};

export default MemorizeGame;
