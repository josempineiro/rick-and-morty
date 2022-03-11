import { RadioGroup } from "@headlessui/react";
import MemorizeGame from "./MemorizeGame";
import classNames from "classnames";

const settings = [
  {
    value: MemorizeGame.levels.test,
    label: "Test",
    description: "2 cards",
  },
  {
    value: MemorizeGame.levels.easy,
    label: "Easy",
    description: "12 cards",
  },
  {
    value: MemorizeGame.levels.medium,
    label: "Medium",
    description: "24 cards",
  },
  {
    value: MemorizeGame.levels.hard,
    label: "Hard",
    description: "48 cards",
  },
];

export interface LevelSelectorProps {
  value?: any;
  onChange?: (value: any) => void;
}

function LevelSelector({ value, onChange }: LevelSelectorProps) {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <RadioGroup.Label className="text-sm font-medium text-gray-900">
        Level
      </RadioGroup.Label>
      <p className="text-sm leading-5 text-gray-500 mb-4">
        Select a level to start the game
      </p>
      <div className="mt-1 bg-white rounded-md shadow-sm -space-y-px">
        {settings.map((setting, settingIdx) => (
          <RadioGroup.Option
            key={setting.name}
            value={setting}
            className={({ checked }) =>
              classNames(
                settingIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                settingIdx === settings.length - 1
                  ? "rounded-bl-md rounded-br-md"
                  : "",
                checked ? "bg-cyan-50 border-cyan-200 z-10" : "border-gray-200",
                "relative border p-4 flex cursor-pointer focus:outline-none"
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={classNames(
                    checked
                      ? "bg-cyan-600 border-transparent"
                      : "bg-white border-gray-300",
                    active ? "ring-2 ring-offset-2 ring-cyan-500" : "",
                    "h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <div className="ml-3 flex flex-col">
                  <RadioGroup.Label
                    as="span"
                    className={classNames(
                      checked ? "text-cyan-900" : "text-gray-900",
                      "block text-sm font-medium"
                    )}
                  >
                    {setting.label}
                  </RadioGroup.Label>
                  <RadioGroup.Description
                    as="span"
                    className={classNames(
                      checked ? "text-cyan-700" : "text-gray-500",
                      "block text-sm"
                    )}
                  >
                    {setting.description}
                  </RadioGroup.Description>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}

export default LevelSelector;
