/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import classNames from 'classnames'

interface Item {
  id: string
}

interface GridProps {
  items: Item[]
  renderGridItem: Function
  className?: string
  loading: boolean
}

export default function Grid({
  items,
  renderGridItem,
  className,
  loading,
}: GridProps) {
  return (
    <ul
      role="Grid"
      className={classNames([
        'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
        className,
      ])}
    >
      {items.map((item, index) => (
        <Fragment key={item.id}>
          {renderGridItem({ item, index, loading })}
        </Fragment>
      ))}
    </ul>
  )
}
