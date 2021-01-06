import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Second Page" />
    <div className="flex justify-center flex-col items-center mt-10">
      <div className="w-52 my-8">
        <Image />
      </div>
      <div className="text-center">
        <span className="text-3xl font-medium">Hi from Second Page</span> <br />
        <br />
        This page loaded from{'  '}
        <span className="font-mono text-sm bg-gray-200 p-1 rounded">
          src/pages/page-2.js
        </span>
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

export default SecondPage
