import React from 'react'
import Table from 'components/ui/Table'
import List from 'components/ui/List'
import EpisodeTableRow from './EpisodeTableRow'
import EpisodeListItem from './EpisodeListItem'
import EpisodeGridItem from './EpisodeGridItem'
import { Character, PageInfo } from 'types'

interface CharactersProps {
  characters: Character[]
  loading?: boolean
}

const Characters = ({ characters, loading }: CharactersProps) => {
  return (
    <>
      <Table
        className="hidden md:flex"
        data={characters}
        renderTableRow={EpisodeTableRow}
        loading={loading}
      />
      <List
        className="flex md:hidden"
        items={characters}
        renderListItem={EpisodeListItem}
        loading={loading}
      />
      <List
        className="flex md:hidden"
        items={characters}
        renderListItem={EpisodeGridItem}
        loading={loading}
      />
    </>
  )
}

Characters.displayName = 'Characters'

Characters.propTypes = {}

export default Characters
