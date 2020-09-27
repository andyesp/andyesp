import Head from 'next/head'
import { isEmpty } from 'lodash'
import Layout from '~/components/Layout'

/**
 * Constants
 */

const Projects = [
  {
    id: 6,
    title: 'DJMAG Latam',
    year: 2020,
    description: 'Design and development of website for one of the most important electronic music brands.',
    tech: 'NextJS, Wordpress.',
    url: null,
    releaseDate: 'Release in October 2020.',
  },
  {
    id: 5,
    title: 'Marina León',
    year: 2020,
    description: 'Website development for Buenos Aires based illustrator.',
    tech: 'NextJS.',
    url: null,
    releaseDate: 'Release in October 2020.',
  },
  {
    id: 4,
    title: 'Lo que no pudimos compartir',
    year: 2020,
    description: 'Interactive project development.',
    tech: 'NextJS. To be ported to Unity.',
    url: 'https://www.behance.net/gallery/103563219/Lo-que-no-pudimos-compartir',
  },
  {
    id: 3,
    title: 'XDK2MAM Dashboard',
    year: 2019,
    description: 'Design and development of open source visualization tool for the XDK110 sensor.',
    tech: 'React.',
    url: 'https://github.com/xdk2mam/xdk2mam-dashboard',
  },
  {
    id: 2,
    title: 'Dalinha',
    year: 2016,
    description: 'Development for visual artist website.',
    tech: 'HTML, CSS, Javascript, PHP (Wordpress).',
    url: 'https://gustavodalinha.com',
  },
  {
    id: 1,
    title: 'Jose Luis Diaz Ramirez',
    year: 2016,
    description: 'Design and development for visual artist website.',
    tech: 'HTML, CSS, Javascript, PHP (Wordpress).',
    url: 'http://josediazramirez.com',
  },
]

/**
 * Code
 */

const Code = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        {Projects.map((item) => (
          <div className="item mb-8 pb-8">
            <h3 className="font-bold text-lg mb-4">
              {item.title} ({item.year})
            </h3>
            <div className="md:ml-4 mb-2">
              <p className="mb-2">{item.description}</p>
              <p className="mb-2">{item.tech}</p>
              {!isEmpty(item.url) && (
                <a href={item.url} target="_blank">
                  <p className="mb-2 break-words underline">{item.url}</p>
                </a>
              )}
              {!isEmpty(item.releaseDate) && <p className="mb-2">{item.releaseDate}</p>}
            </div>
          </div>
        ))}

        <style jsx>{`
          .item {
            max-width: 500px;
            border-bottom: 1px solid #b9c8da;
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
        `}</style>
      </div>
    </Layout>
  )
}

/**
 * Exports
 */

export default Code
