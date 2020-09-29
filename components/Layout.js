import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <div className="container flex flex-col">
      <Head>
        <title>Andy Espagnolo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-8">
        <Link href="/">
          <div className="logo cursor-pointer">
            <h1 className="title font-bold">Andy</h1>
            <h1 className="title font-bold">Espagnolo</h1>
          </div>
        </Link>
      </header>

      <div className="body flex flex-1 flex-col md:flex-row">
        <nav className="flex flex-row md:flex-col py-4 px-8 md:py-8">
          <Link href="/code">
            <a className="mr-4">
              <h3>code / design</h3>
            </a>
          </Link>
          <a href="https://andyesp.bandcamp.com">
            <h3>music</h3>
          </a>
        </nav>

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
          className="p-8"
        >
          {children}
        </motion.main>
      </div>

      <footer>
        <a href="mailto:andyespagnolo@gmail.com">
          <p>andyespagnolo@gmail.com</p>
        </a>
      </footer>

      <style jsx>{`
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
      `}</style>

      <style jsx global>{`
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
      `}</style>
    </div>
  )
}

export default Layout
