import { CalendarIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Character, Episode } from 'types'
import List from 'components/ui/List'

interface CharacterProps {
  character: Character
}

interface SeasonsListProps {
  episodes: Episode[]
}

interface Season {
  id: string
  name: string
  episodes: number
  start_date: string
}

interface SeasonListItemProps {
  item: Season
}

function SeasonListItem({ item: season }: SeasonListItemProps) {
  return (
    <div className="px-4 py-4 flex items-center sm:px-6">
      <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
        <div className="truncate">
          <div className="flex text-sm">
            <p className="font-medium text-cyan-600 truncate">{season.name}</p>
          </div>
          <div className="mt-2 flex">
            <div className="flex items-center text-sm text-gray-500">
              Total episodes {season.episodes}
            </div>
          </div>
        </div>
        <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
          <div className="flex items-center text-sm text-gray-500">
            <CalendarIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <p>
              Started on{' '}
              <time dateTime={season.start_date}>
                {new Date(season.start_date).toDateString()}
              </time>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SeasonsList({ episodes }: SeasonsListProps) {
  const season = episodes.reduce((seasons, episode) => {
    const seasonId = episode.episode.split('E')[0].replace('S', '')
    const episodeSeason = seasons.find(({ id }) => id === seasonId)
    if (episodeSeason) {
      return [
        ...seasons.filter((season) => season !== episodeSeason),
        { ...episodeSeason, episodes: episodeSeason.episodes + 1 },
      ]
    }
    const seasonName = `Season ${seasonId}`
    return [
      ...seasons,
      {
        id: seasonId,
        name: seasonName,
        start_date: episode.air_date,
        episodes: 1,
      },
    ]
  }, [])
  return <List renderListItem={SeasonListItem} items={season} />
}

SeasonsList.displayName = 'SeasonsList'

SeasonsList.propTypes = {}

export default SeasonsList
