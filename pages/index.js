import Link from 'next/link'
import Head from 'next/head'
import Layout from '~/components/Layout'

const Home = () => {
  return (
    <Layout>
      <p>
        I'm a{' '}
        <Link href="/code">
          <a className="underline">software developer</a>
        </Link>{' '}
        from Buenos Aires, Argentina.
      </p>
      <p>When I'm not coding, I work on audiovisual projects as another way to express myself creatively.</p>
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
    </Layout>
  )
}

export default Home
