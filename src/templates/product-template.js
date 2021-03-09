import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../component/Layout"
import Image from "gatsby-image"
import * as styles from "../component/product.module.css"

const ComponentName = ({ data: {
    product: {
        title,
        price,
        info: { info },
        image: { fixed }
    }
}
}) => {
    return (
        <Layout>
            <div style={{ textAlign: "center" }}>
                <Link to="/products">Back to products</Link>
                <h1 style={{ textTransform: "capitalize" }}>Single Product: {title}</h1>
            </div>
            <section className={styles.singleProduct}>
                <article>
                    <Image fixed={fixed} alt={title} />
                </article>
                <article>
                    <h1>{title}</h1>
                    <h3>${price}</h3>
                    <p>{info}</p>
                    <button>Add to cart</button>
                </article>
            </section>

        </Layout>
    )
}

export const query = graphql`
    query GetSingleProduct($slug:String)
        {
            product: contentfulProduct(slug: {eq: $slug}) {
                title
                slug
                price
                info {
                    info
                }
                image {
                    fixed (width: 300) {
                        ...GatsbyContentfulFixed
                    }
                }
            }
        }
    `

export default ComponentName