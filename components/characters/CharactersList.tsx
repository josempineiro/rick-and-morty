import React from 'react'
import PropTypes from 'prop-types'
import Table from 'components/ui/Table'
import List from 'components/ui/List'
import Pagination from 'components/ui/Pagination'
import CharacterRow from './CharacterRow'
import CharacterItem from './CharacterItem'

const CharactersList = ({ characters, pageInfo }) => {
  return (
    <>
      <Pagination pageInfo={pageInfo} />
      <Table
        className="hidden md:flex"
        data={characters}
        renderRow={CharacterRow}
      />
      <List
        className="flex md:hidden"
        items={characters}
        renderItem={CharacterItem}
      />
      <Pagination pageInfo={pageInfo} />
    </>
  )
}

CharactersList.displayName = 'CharactersList'

CharactersList.propTypes = {}

export default CharactersList
