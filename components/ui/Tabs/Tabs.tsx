import classNames from 'classnames'
import { SVGProps } from 'react'

interface Tab {
  title: string
  id: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  current: boolean
}

interface TabsProps {
  tabs: Tab[]
  onChangeTab: Function
}

export default function Tabs({ tabs, onChangeTab }: TabsProps) {
  function handleSelectTabChange(event) {
    const selectedTab = tabs.find(({ id }) => id === event.target.value)
    onChangeTab(selectedTab)
  }
  return (
    <div className="block">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={classNames(
                tab.current
                  ? 'border-cyan-500 text-cyan-600'
                  : 'flex-1 sm:flex-none border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'flex-1 sm:flex-none group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm'
              )}
              aria-current={tab.current ? 'page' : undefined}
              onClick={() => onChangeTab(tab)}
            >
              <tab.icon
                className={classNames(
                  tab.current
                    ? 'text-cyan-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                  '-ml-0.5 mr-2 h-5 w-5'
                )}
                aria-hidden="true"
              />
              <span>{tab.title}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
