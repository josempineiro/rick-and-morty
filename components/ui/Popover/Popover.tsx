import { useRef } from "react";
import ReactDOM from "react-dom";
import { Popover as HeadlessUIPopover, Transition } from "@headlessui/react";
import { usePopper } from "react-popper";
import { beforeWrite } from "@popperjs/core/lib/enums";
import { Placement } from "@popperjs/core";

interface PopoverProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className: string;
  as: React.ComponentType<any> | React.ElementType<any> | null;
  placement: Placement;
}

const sameWidth = {
  name: "sameWidth",
  enabled: true,
  phase: beforeWrite,
  requires: ["computeStyles"],
  fn: ({ state }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  effect: ({ state }) => {
    state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
  },
};

const offset = {
  name: "offset",
  options: {
    offset: ({ placement, reference, popper }) => {
      return [0, reference.height * -1 - 16];
    },
  },
};

const computeStyles = {
  name: "computeStyles",
  options: {},
};

function Popover({
  content,
  children,
  className,
  as,
  placement,
}: PopoverProps) {
  const referenceElement = useRef();
  const popperElement = useRef();
  const { state, styles, attributes } = usePopper(
    referenceElement.current,
    popperElement.current,
    {
      placement,
      modifiers: [computeStyles, sameWidth, offset],
      strategy: "fixed",
    }
  );
  console.log(state);
  return (
    <HeadlessUIPopover className={className}>
      <HeadlessUIPopover.Button as={as} ref={popperElement}>
        {children}
      </HeadlessUIPopover.Button>
      {ReactDOM.createPortal(
        <Transition
          className="ASDF"
          enter="transition duration-100 ease-out"
          enterFrom="transform  opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform  opacity-100"
          leaveTo="transform  opacity-0"
        >
          <HeadlessUIPopover.Panel
            ref={referenceElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <div className="bg-white shadow-lg py-4">
              {children}
              {content}
            </div>
          </HeadlessUIPopover.Panel>
        </Transition>,
        document.querySelector("#Popovers")
      )}
    </HeadlessUIPopover>
  );
}

export default Popover;
