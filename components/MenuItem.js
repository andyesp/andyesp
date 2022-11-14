import Link from 'next/link'
import PropTypes from 'prop-types'

/**
 * MenuItem
 */

const MenuItem = ({ href, text }) => (
  <Link className="mr-4 text-white" href={href}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <h3 className="underline text-text">{text}</h3>
  </Link>
)

/**
 * PropTypes
 */

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

/**
 * Exports
 */

export default MenuItem
