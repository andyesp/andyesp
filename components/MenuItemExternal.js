import PropTypes from 'prop-types'

/**
 * MenuItemExternal
 */

const MenuItemExternal = ({ href, text }) => (
  <a href={href} className="mr-4">
    <h3 className="underline text-text">{text}</h3>
  </a>
)

/**
 * PropTypes
 */

MenuItemExternal.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

/**
 * Exports
 */

export default MenuItemExternal
