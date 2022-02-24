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
  renderListItem: Function
  className?: string

  loading: boolean
}

export default function List({
  items,
  renderListItem,
  className,
  loading,
}: ListProps) {
  return (
    <div
      className={classNames([
        'bg-white shadow overflow-hidden sm:rounded-md',
        className,
      ])}
    >
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <Fragment key={item.id}>
            {renderListItem({ item, index, loading })}
          </Fragment>
        ))}
      </ul>
    </div>
  )
}
