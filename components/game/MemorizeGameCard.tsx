import { Fragment } from "react";
import _ from "lodash";
import { Transition } from "@headlessui/react";
import classNames from "classnames";
import styles from "./MemorizeGameCard.module.css";

type Item = {
  id: number;
  index: number;
  name: string;
  image: string;
};

type MemorizeGameCardProps = {
  item: Item;
  onClick: Function;
  visible: boolean;
};

const MemorizeGameCard = ({
  item,
  onClick,
  visible,
}: MemorizeGameCardProps) => {
  return (
    <div
      key={`${item.index}`}
      onClick={() => onClick(item)}
      className={classNames(styles.card)}
    >
      <Transition
        as={Fragment}
        show={visible}
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
          src={item.image}
          className={classNames(
            "object-cover w-full h-full object-center  group-hover:opacity-75 user-select-none"
          )}
        />
      </Transition>
      <Transition
        as={Fragment}
        show={!visible}
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
          src={"/card.png"}
          className={classNames(
            "object-cover w-full h-full object-center  group-hover:opacity-75 user-select-none"
          )}
        />
      </Transition>
    </div>
  );
};

MemorizeGameCard.displayName = "MemorizeGameCard";

export default MemorizeGameCard;
