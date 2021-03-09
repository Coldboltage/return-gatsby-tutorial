import React from 'react'
import Header from "../examples/Header"
import Layout from "../component/Layout"
import HeaderStatic from "../examples/HeaderStatic"
import {graphql} from "gatsby"

const examples = ({data}) => {
    const {site: {siteMetadata: {author}} } = data
    return (
        <Layout>
            <Header/>
            <HeaderStatic></HeaderStatic>
            <p>This is the example page</p>
            <h4>Author: {author}</h4>
        </Layout>
    )
}

export const data = graphql`
query pageQuery {
    site {
      siteMetadata {
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

export default examples
