import CollectibleItem from '~/components/CollectibleItem'
import { Collectibles as CollectiblesData } from '~/lib/data'

/**
 * Collectibles
 */

const Collectibles = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {CollectiblesData.map((item) => (
        <CollectibleItem key={item.id} item={item} />
      ))}
    </div>
  </>
)

/**
 * Exports
 */

export default Collectibles
