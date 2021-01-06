// If you don't want to use TypeScript you can delete this file!
import React from 'react'
import { PageProps, Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Using TypeScript" />
    <div className="flex justify-center flex-col items-center mt-10">
      <div className="w-52 my-8">
        <Image />
      </div>
      <div className="text-center w-3/4">
        <span className="text-3xl font-medium">
          Gatsby supports TypeScript by default!
        </span>{' '}
        <br />
        <br />
        <p>
          You're currently on the page{' '}
          <span className="font-mono text-sm bg-gray-200 p-1 rounded">
            {path}
          </span>{' '}
          which was built on {data.site.buildTime}.
          <br /> To learn more, head over to our{' '}
          <a
            href="https://www.gatsbyjs.com/docs/typescript/"
            className="text-blue-500 hover:text-blue-600"
          >
            documentation about TypeScript
          </a>
        </p>
      </div>
      <div className="my-8">
        <Link
          to="/"
          className="py-2 px-4 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Go to Home
        </Link>
      </div>
    </div>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "DD-MM-YYYY hh:mm a")
    }
  }
`
