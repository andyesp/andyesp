import CollectibleItem from '~/components/CollectibleItem'
import { Collectibles as CollectiblesData } from '~/lib/data'

/**
 * Collectibles
 */

const Collectibles = () => (
  <>
    <div className="grid">
      {CollectiblesData.map((item) => (
        <CollectibleItem key={item.id} item={item} />
      ))}
    </div>
    <style jsx>
      {`
        p {
          max-width: 500px;
          color: #b9c8da;
          margin: 0 0 10px 0;
        }

        a {
          color: #b9c8da;
        }
      `}
    </style>
  </>
)

/**
 * Exports
 */

export default Collectibles
