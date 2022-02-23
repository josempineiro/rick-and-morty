import React from 'react'
import PropTypes from 'prop-types'
import Table from 'components/ui/Table'
import CharacterRow from './CharacterRow'

const CharactersList = ({ characters, pageInfo }) => {
  return (
    <Table data={characters} pageInfo={pageInfo} renderRow={CharacterRow} />
  )
}

CharactersList.displayName = 'CharactersList'

CharactersList.propTypes = {}

export default CharactersList
