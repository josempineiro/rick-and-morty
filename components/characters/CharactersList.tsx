import React from 'react'
import Table from 'components/ui/Table'
import List from 'components/ui/List'
import CharacterTableRow from './CharacterTableRow'
import CharacterListItem from './CharacterListItem'
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
        renderTableRow={CharacterTableRow}
        loading={loading}
      />
      <List
        className="flex md:hidden"
        items={characters}
        renderListItem={CharacterListItem}
        loading={loading}
      />
    </>
  )
}

Characters.displayName = 'Characters'

Characters.propTypes = {}

export default Characters
