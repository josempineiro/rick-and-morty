import React from 'react'
import Table from 'components/ui/Table'
import List from 'components/ui/List'
import CharacterRow from './CharacterRow'
import CharacterItem from './CharacterItem'
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
        renderRow={CharacterRow}
        loading={loading}
      />
      <List
        className="flex md:hidden"
        items={characters}
        renderItem={CharacterItem}
        loading={loading}
      />
    </>
  )
}

Characters.displayName = 'Characters'

Characters.propTypes = {}

export default Characters
