import { Fragment, useEffect, useState } from "react";
import _ from "lodash";
import { Transition } from "@headlessui/react";
import { SwitchHorizontalIcon, ClockIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import MemorizeGameCard from "./MemorizeGameCard";
import styles from "./MemorizeGame.module.css";

type Item = {
  id: number;
  index: number;
  name: string;
  image: string;
};

type MemorizeGameProps = {
  items: Item[];
  level: "easy" | "medium" | "hard";
};

const MemorizeGame = ({ items, level }: MemorizeGameProps) => {
  const numItems = (() => {
    switch (level) {
      case "easy":
        return 12;
      case "medium":
        return 24;
      case "hard":
        return 48;
    }
  })();

  const [cards] = useState(
    _.shuffle([...items.slice(0, numItems), ...items.slice(0, numItems)]).map(
      (character, index) => ({
        ...character,
        index,
      })
    )
  );

  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState(undefined);
  const [steps, setSteps] = useState(0);

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
    } else if (selected && selected.index === character.index) {
      return true;
    } else if (compare && compare.index === character.index) {
      return true;
    }
    return false;
  };

  return (
    <div className={classNames(styles.root, { [styles[level]]: true })}>
      <div className="flex justify-around gap-8 mb-4 max-w-xs mx-auto">
        <div className="relative flex flex-1 items-center justify-center flex-col rounded-lg shadow-lg bg-white py-2 px-4">
          <span className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 p-1 rounded-full bg-white shadow-lg">
            <ClockIcon className=" h-4 w-4 text-gray-500 " />
          </span>
          <span className="text-2xl text-center text-cyan-600">{time}</span>
        </div>
        <div className="relative flex flex-1 items-center justify-center flex-col rounded-lg shadow-lg bg-white py-2 px-4">
          <span className="text-2xl text-center whitespace-pre text-cyan-600">
            {resolved.length / 2} / {cards.length / 2}
          </span>
        </div>
        <div className="relative flex flex-1 items-center justify-center flex-col rounded-lg shadow-lg bg-white py-2 px-4">
          <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 p-1 rounded-full bg-white shadow-lg">
            <SwitchHorizontalIcon className="h-4 w-4 text-gray-500" />
          </span>
          <span className="text-2xl text-center text-cyan-600">{steps}</span>
        </div>
      </div>
      <div className={styles.board}>
        {cards.map((item) => {
          return (
            <MemorizeGameCard
              item={item}
              key={`${item.index}`}
              onClick={() => handleClick(item)}
              visible={isVisible(item)}
            />
          );
        })}
      </div>
    </div>
  );
};

MemorizeGame.levels = {
  easy: "easy",
  medium: "medium",
  hard: "hard",
};

export default MemorizeGame;
