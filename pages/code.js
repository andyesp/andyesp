import { motion } from 'framer-motion'
import { isEmpty, isNil, toNumber } from 'lodash'

import { CodeProjects } from '~/lib/data'

/**
 * Code
 */

const Code = () => (
  <div className="flex flex-col">
    {CodeProjects.map((item, index) => (
      <motion.div
        key={item.id}
        className="item mb-4 md:mb-8 pb-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: '10%',
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: toNumber(`0.${index}`),
            },
          },
        }}
      >
        <div className="item">
          <h3 className="font-bold text-lg mb-3">
            {item.title}
            {!isNil(item.year) ? ` (${item.year})` : null}
          </h3>
          <div className="md:ml-4 mb-2">
            {item.description && <p className="mb-2">{item.description}</p>}
            {item.tech && <p className="mb-2">{item.tech}</p>}
            {!isEmpty(item.url) && (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <p className="mb-2 break-words underline">{item.url}</p>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    ))}

    <style jsx>
      {`
        .container {
          opacity: 0;
        }

        .item {
          max-width: 500px;
        }

        h3 {
          color: #b9c8da;
        }

        p {
          color: #b9c8da;
        }

        a {
          color: #b9c8da;
        }
      `}
    </style>
  </div>
)

/**
 * Exports
 */

export default Code
