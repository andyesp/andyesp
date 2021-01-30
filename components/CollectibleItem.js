import PropTypes from 'prop-types'

/**
 * CollectibleItem
 */

const CollectibleItem = ({ item }) => (
  <a href={item.url} target="_blank" rel="noopener noreferrer" className="relative">
    <img src={item.imageUrl} className="max-w-xs" />
    <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full opacity-0 bg-overlay hover:opacity-100 transition-all duration-200">
      <h2 className="font-bold text-2xl text-text tracking-widest">{item.name}</h2>
    </div>
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
