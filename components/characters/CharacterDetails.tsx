import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CollectionIcon, FilmIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { Character, Episode } from "types";
import Tabs from "components/ui/Tabs";
import EpisodesList from "components/episodes/EpisodesList";
import SeasonsList from "components/seasons/SeasonsList";
interface CharacterProps {
  character: Character;
}

const CharacterDetails = ({ character }: CharacterProps) => {
  const [tabs, setTabs] = useState([
    {
      id: "seasons",
      title: "Seasons",
      current: true,
      icon: CollectionIcon,
    },
    {
      id: "episodes",
      title: "Episodes",
      current: false,
      icon: FilmIcon,
    },
  ]);

  const currentTab = tabs.find(({ current }) => current);

  function handleChangeTab(currentTab) {
    setTabs((tabs) =>
      tabs.map((tab) => ({
        ...tab,
        current: currentTab.id === tab.id,
      }))
    );
  }

  return (
    <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
      <div className="flex-1 relative z-0 flex overflow-hidden">
        <div className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
          <article>
            {/* Profile header */}
            <div>
              <div>
                <img
                  className="h-32 w-full object-cover lg:h-48"
                  src={character.image}
                  alt=""
                />
              </div>
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                  <div className="flex">
                    <img
                      className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                      src={character.image}
                      alt=""
                    />
                  </div>
                  <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                      <h1 className="text-2xl font-bold text-gray-900 truncate">
                        {character.name}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                    {character.name}
                  </h1>
                </div>
              </div>
            </div>
            <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
              <Tabs tabs={tabs} onChangeTab={handleChangeTab} />
              {currentTab.id === "episodes" && (
                <EpisodesList variant="list" episodes={character.episode} />
              )}
              {currentTab.id === "seasons" && (
                <SeasonsList episodes={character.episode} />
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

CharacterDetails.displayName = "CharacterDetails";

CharacterDetails.propTypes = {};

export default CharacterDetails;
