import Link from 'next/link'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>Andy Espagnolo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Link href="/">
          <div className="logo">
            <h1 className="title">Andy</h1>
            <h1 className="title">Espagnolo</h1>
          </div>
        </Link>
      </header>

      <div className="body">
        <nav>
          <Link href="/code">
            <a>
              <h3>code / design</h3>
            </a>
          </Link>
          <a href="https://andyesp.bandcamp.com">
            <h3>music</h3>
          </a>
        </nav>

        <main>{children}</main>
      </div>

      <footer>
        <a href="mailto:andyespagnolo@gmail.com">
          <p>andyespagnolo@gmail.com</p>
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          background-color: #2e1f47;
        }

        .body {
          display: flex;
          flex: 1;
          flex-direction: row;
        }

        header {
          padding: 2rem;
        }

        .logo {
          width: 225px;
          cursor: pointer;
        }

        nav {
          display: flex;
          flex-direction: column;
          padding: 2rem;
        }

        nav h3 {
          margin: 0;
          color: #b9c8da;
          text-decoration: underline;
        }

        main {
          padding: 2rem;
        }

        .title {
          margin: 0;
          font-family: Helvetica;
          font-size: 2rem;
          line-height: 0.9;
          color: #b9c8da;
        }

        p {
          margin-top: 2rem;
          margin-left: 2rem;
          font-family: Helvetica;
          color: #b9c8da;
        }

        img {
          width: 50%;
          object-fit: contain;
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
