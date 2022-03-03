import React, { Children, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface ActiveLinkProps {
  children: JSX.Element
  activeClassName: string
  href: string
  as?: string
}

const ActiveLink = ({
  children,
  activeClassName,
  href,
  as,
  ...props
}: ActiveLinkProps) => {
  const { asPath, isReady } = useRouter()

  const child = Children.only(children)
  const childClassName = child.props.className || ''
  const [className, setClassName] = useState(childClassName)

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(as || href, location.href).pathname

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname

      const newClassName =
        linkPathname === activePathname
          ? `${childClassName} ${activeClassName}`.trim()
          : childClassName

      if (newClassName !== className) {
        setClassName(newClassName)
      }
    }
  }, [
    asPath,
    isReady,
    as,
    href,
    childClassName,
    activeClassName,
    setClassName,
    className,
  ])
  return (
    <Link href={href} as={as} {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

export default ActiveLink
