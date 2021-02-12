import Link from 'next/link'
import PropTypes from 'prop-types'

/**
 * MenuItem
 */

const MenuItem = ({ href, text }) => (
  <Link href={href} passHref>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className="mr-4 text-white">
      <h3 className="underline text-text">{text}</h3>
    </a>
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
