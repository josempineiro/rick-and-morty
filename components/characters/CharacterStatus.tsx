import React from 'react'
import classNames from 'classnames'
import { Character } from 'types'
import styles from './Character.module.css'

interface CharacterStatusProps {
  character: Character
  size?: string
}

const CharacterStatus = ({ character, size }: CharacterStatusProps) => {
  return (
    <span
      className={classNames([
        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800',
        { [styles[character.status]]: true },
      ])}
    >
      {character.status}
    </span>
  )
}

CharacterStatus.displayName = 'CharacterStatus'

export default CharacterStatus
