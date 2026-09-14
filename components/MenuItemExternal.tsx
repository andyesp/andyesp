/**
 * MenuItemExternal
 */

type MenuItemExternalProps = {
  href: string
  text: string
}

const MenuItemExternal = ({ href, text }: MenuItemExternalProps) => (
  <a href={href} className="mr-4">
    <h3 className="underline text-text">{text}</h3>
  </a>
)

/**
 * Exports
 */

export default MenuItemExternal
