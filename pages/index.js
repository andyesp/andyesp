import Head from "next/head";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Andy Espagnolo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="title">Andy</h1>
        <h1 className="title">Espagnolo</h1>
      </header>
      <main>
        <img src="/images/japan-01.jpeg" />
      </main>

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

        main {
          display: flex;
          flex: 1;
          flex-direction: column;
          margin-top: 3rem;
          align-items: center;
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
          font-family: Futura;
          color: #b9c8da;
        }

        img {
          width: 50%;
          object-fit: contain;
        }

        .title:first-child {
          padding-left: 0.11rem;
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
