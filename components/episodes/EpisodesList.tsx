import React from 'react'
import Table from 'components/ui/Table'
import List from 'components/ui/List'
import EpisodeTableRow from './EpisodeTableRow'
import EpisodeListItem from './EpisodeListItem'
import { Episode } from 'types'

interface EpisodesListProps {
  episodes: Episode[]
  loading?: boolean
  variant?: string
}

const EpisodesList = ({ episodes, loading, variant }: EpisodesListProps) => {
  switch (variant) {
    case 'table':
      return (
        <Table
          data={episodes}
          renderTableRow={EpisodeTableRow}
          loading={loading}
        />
      )
    case 'list':
      return (
        <List
          items={episodes}
          renderListItem={EpisodeListItem}
          loading={loading}
        />
      )
    default:
      return (
        <>
          <Table
            className="hidden xl:flex"
            data={episodes}
            renderTableRow={EpisodeTableRow}
            loading={loading}
          />
          <List
            className="flex xl:hidden"
            items={episodes}
            renderListItem={EpisodeListItem}
            loading={loading}
          />
        </>
      )
  }
}

EpisodesList.displayName = 'EpisodesList'

EpisodesList.propTypes = {}

export default EpisodesList
