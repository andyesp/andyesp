import PropTypes from 'prop-types'

/**
 * CollectibleItem
 */

const CollectibleItem = ({ item }) => (
  <a href={item.url} target="_blank" rel="noopener noreferrer" className="relative">
    <img src={item.imageUrl} className="w-full md:max-w-xs" />
    <p className="font-bold text-text text-lg">{item.name}</p>
  </a>
)

/**
 * PropTypes
 */

CollectibleItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
}

/**
 * Exports
 */

export default CollectibleItem
