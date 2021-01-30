import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import Menu from '~/components/Menu'

/**
 * Layout
 */

const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <div className="container flex flex-col">
      <Head>
        <title>Andy Espagnolo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="static md:fixed top-0 p-8">
        <Link href="/">
          <div className="logo cursor-pointer">
            <h1 className="title font-bold">Andy</h1>
            <h1 className="title font-bold">Espagnolo</h1>
          </div>
        </Link>
      </header>

      <div className="body flex flex-1 flex-col md:flex-row">
        <Menu />

        <motion.main
          key={router.pathname}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
          className="p-8 mt-0 md:mt-24 ml-0 md:ml-48"
        >
          {children}
        </motion.main>
      </div>

      <footer className="static md:fixed bottom-0">
        <a href="mailto:andyespagnolo@gmail.com">
          <p>andyespagnolo@gmail.com</p>
        </a>
      </footer>

      <style jsx>
        {`
          .container {
            min-height: 100vh;
            background-color: #2e1f47;
          }

          .logo {
            width: 225px;
          }

          nav h3 {
            margin: 0;
            color: #b9c8da;
            text-decoration: underline;
          }

          .title {
            margin: 0;
            font-family: Helvetica !important;
            font-size: 2rem;
            line-height: 0.9;
            color: #b9c8da;
          }

          p {
            margin-top: 2rem;
            margin-left: 2rem;
            font-family: Helvetica !important;
            color: #b9c8da;
          }

          .title:first-child {
            padding-left: 0.11rem;
          }

          footer {
            margin-bottom: 1rem;
          }

          footer p {
            font-family: Helvetica;
            font-weight: 700;
            color: #b9c8da;
          }

          footer a {
            text-decoration: none;
          }
        `}
      </style>

      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            background-color: #2e1f47;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
              Droid Sans, Helvetica Neue, sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  )
}

/**
 * PropTypes
 */

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

/**
 * Exports
 */

export default Layout
