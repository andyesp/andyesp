/**
 * CollectibleItem
 */

type CollectibleItemProps = {
  item: {
    id: string
    name: string
    url: string
    imageUrl: string
  }
}

const CollectibleItem = ({ item }: CollectibleItemProps) => (
  <a href={item.url} target="_blank" rel="noopener noreferrer" className="relative">
    <img src={item.imageUrl} alt={item.name} className="w-full md:max-w-xs" />
    <p className="font-bold text-text text-lg">{item.name}</p>
  </a>
)

/**
 * Exports
 */

export default CollectibleItem
