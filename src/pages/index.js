import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Title from '../components/title'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex justify-center flex-col items-center mt-10">
      <div className="w-52 my-8">
        <Image />
      </div>
      <div className="text-center leading-relaxed">
        <Title />
        <br />
        <br />
        Get Started by editing{'  '}
        <span className="font-mono text-sm bg-gray-200 p-1 rounded">
          src/pages/index.js
        </span>
      </div>
      <div className="my-4 flex flex-wrap justify-center">
        <Link
          to="/page-2/"
          className="py-2 px-4 mx-3 my-4 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Go to "Page 2"
        </Link>
        <Link
          to="/using-typescript/"
          className="py-2 px-4 my-4 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Go to "Using TypeScript"
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
