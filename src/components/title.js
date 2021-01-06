import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function Title() {
  const { site } = useStaticQuery(
    graphql`
      query HomePageQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return <span className="text-3xl font-medium">{site.siteMetadata.title}</span>
}
