import React from 'react'
import classNames from 'classnames'
import styles from './Pagination.module.css'

interface PaginationButtonProps {
  onClick: Function
  title: string
  current: number
  index?: number
  disabled?: boolean
  className?: string
  children: React.ReactNode | React.ReactNode[] | Element[]
}

export default function PaginationButton({
  title,
  onClick,
  current,
  index,
  children,
  className,
  disabled,
}: PaginationButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick()}
      title={title}
      className={classNames([
        className,
        styles.button,
        { [styles.current]: current === index },
      ])}
    >
      <span className="sr-only">title</span>
      {children}
    </button>
  )
}
