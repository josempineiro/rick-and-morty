/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import classNames from 'classnames'

const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
]

interface Item {
  id: string
}

interface ListProps {
  items: Item[]
  renderItem: Function
  className: string

  loading: boolean
}

export default function List({
  items,
  renderItem,
  className,
  loading,
}: ListProps) {
  return (
    <ul
      role="list"
      className={classNames([
        'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
        className,
      ])}
    >
      {items.map((item, index) => (
        <Fragment key={item.id}>
          {renderItem({ item, index, loading })}
        </Fragment>
      ))}
    </ul>
  )
}
