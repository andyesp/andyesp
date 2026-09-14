import Link from 'next/link'

/**
 * MenuItem
 */

type MenuItemProps = {
  href: string
  text: string
}

const MenuItem = ({ href, text }: MenuItemProps) => (
  <Link className="mr-4 text-white" href={href}>
    <h3 className="underline text-text">{text}</h3>
  </Link>
)

/**
 * Exports
 */

export default MenuItem
