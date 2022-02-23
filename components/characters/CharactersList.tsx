import React from 'react'
import PropTypes from 'prop-types'
import { gql } from '@apollo/client'

const charactersQuery = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
    }
  }
`

const CharactersList = (props) => {
  return <div>CharactersList</div>
}

CharactersList.displayName = 'CharactersList'

CharactersList.propTypes = {}

export default CharactersList
