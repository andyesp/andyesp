import { motion } from 'framer-motion'

import Layout from '~/components/Layout'

import '../styles/index.css'

/**
 * App
 */

function App({ Component, pageProps }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  )
}

/**
 * Exports
 */

export default App
