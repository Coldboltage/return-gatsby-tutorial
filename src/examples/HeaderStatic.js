import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            person {
              age
              name
            }
            author
            description
            title
          }
        }
      }
    `}
    render={data => <h4>{data.site.info.author}</h4>}
  ></StaticQuery>
)

export default ComponentName

