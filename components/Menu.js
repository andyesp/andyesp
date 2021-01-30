import MenuItem from './MenuItem'
import MenuItemExternal from './MenuItemExternal'

/**
 * Menu
 */

const Menu = () => (
  <nav className="static md:fixed flex flex-row md:flex-col py-4 px-8 md:py-8 mt-0 md:mt-24">
    <MenuItem href="/code" text="code / design" />
    <MenuItemExternal href="https://andyesp.bandcamp.com" text="music" />
    <MenuItem href="/collectibles" text="collectibles" />
  </nav>
)

/**
 * Exports
 */

export default Menu
