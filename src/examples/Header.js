import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
query MyQuery {
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
  
`

const Header = () => {
    const {site: {info: {author,description}}} = useStaticQuery(getData);
    return (
        <div>
            <h1>This is our heading</h1>
            <p>{author}</p>
            <p>{description}</p>
        </div>
    )
}

export default Header
