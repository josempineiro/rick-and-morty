import { SVGProps } from 'react'
import ActiveLink from 'components/ui/ActiveLink'
import styles from './NavLink.module.css'

interface NavLinkItem {
  text: string
  href: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}
interface NavLinkProps {
  item: NavLinkItem
}

export default function NavLink({ item }: NavLinkProps) {
  return (
    <ActiveLink href={item.href} activeClassName={styles.active}>
      <a className={styles.navLink}>
        <item.icon className={styles.navLinkIcon} aria-hidden="true" />
        {item.text}
      </a>
    </ActiveLink>
  )
}
