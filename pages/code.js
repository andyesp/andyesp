import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Andy Espagnolo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div id="text">
          <h1 className="title">Andy</h1>
          <h1 className="title">Espagnolo</h1>
        </div>
      </header>

      <main>
        <div className="item">
          <h3>DJMAG Latam</h3>
          <p>
            Design and development of website for one of the most important
            electronic brands.
          </p>
          <p>NextJS, Wordpress.</p>
          <p>Release in September 2020.</p>
        </div>
        <div className="item">
          <h3>XDK2MAM Dashboard</h3>
          <p>
            Design and development of visualization tool for the XDK110 sensor.
          </p>
          <p>React.</p>
          <a
            href="https://github.com/xdk2mam/xdk2mam-dashboard"
            target="_blank"
          >
            <p>https://github.com/xdk2mam/xdk2mam-dashboard</p>
          </a>
        </div>
        <div className="item">
          <h3>Dalinha</h3>
          <p>Development for visual artist website.</p>
          <p>Wordpress.</p>
          <a href="https://gustavodalinha.com" target="_blank">
            <p>https://gustavodalinha.com</p>
          </a>
        </div>
        <div className="item">
          <h3>Jose Luis Diaz Ramirez</h3>
          <p>Design and development for visual artist website.</p>
          <p>HTML, CSS, Javascript, PHP (Wordpress).</p>
          <a href="http://josediazramirez.com/" target="_blank">
            <p>http://josediazramirez.com/</p>
          </a>
        </div>
      </main>

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

        header {
          padding: 2rem;
        }

        #text {
          width: 100px;
        }

        main {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 2rem;
        }

        main h3 {
          margin: 0;
          color: #b9c8da;
        }

        .item {
          max-width: 500px;
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #b9c8da;
        }

        .item:last-child {
          border-bottom: none;
        }

        .title {
          margin: 0;
          font-family: Helvetica;
          font-size: 2rem;
          line-height: 0.9;
          color: #b9c8da;
        }

        p {
          margin-left: 2rem;
          margin-bottom: 0;
          font-family: Helvetica;
          color: #b9c8da;
        }

        a {
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
          margin-bottom: 2rem;
        }

        footer p {
          font-family: Futura;
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
