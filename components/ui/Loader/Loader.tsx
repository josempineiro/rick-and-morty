import classNames from 'classnames'
import styles from './Loader.module.css'

interface LoaderProps {
  variant?: string
}

const Loader = ({ variant }: LoaderProps) => {
  return (
    <div
      className={classNames([styles.loader, { [styles[variant]]: variant }])}
    />
  )
}
Loader.defaultProps = {
  variant: 'circular',
}

Loader.displayName = 'Loader'

export default Loader
