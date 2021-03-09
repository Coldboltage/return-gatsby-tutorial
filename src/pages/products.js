import React from "react"
import { graphql } from "gatsby"
import Layout from "../component/Layout"
import * as styles from "../component/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Products = ({ data }) => {
    const {allContentfulProduct: {nodes: products}} = data
    return (
        <Layout>
            <section className={styles.page}>
                {products.map(({title, slug, price, id, image})=> {
                    return (
                        <article key={id}>
                            <Image fluid={image.fluid} alt={title}/>
                            <h3>{title} <span>${price}</span></h3>
                            <Link to={`/products/${slug}`}>More Details</Link>
                        </article>
                    )
                })}
            </section>
        </Layout>
    )

}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        price
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default Products
