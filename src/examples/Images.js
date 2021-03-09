import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image1.jpg"
import Image from "gatsby-image"

const getImages = graphql`
{
  fixedImage: file(relativePath: {eq: "image1.jpg"}) {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluidImage: file(relativePath: {eq: "image1.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}`

const Images = () => {
    const data = useStaticQuery(getImages);
    console.log(data)
    return (
        <section className="images">
            <article className="single-image">
                <h3>Basic Image</h3>
                <img src={img} alt="" width="100%"></img>
            </article>
            <article className="single-image">
                <h3>Fixed Image/Blur</h3>
                <Image fixed={data.fixedImage.childImageSharp.fixed}/>
            </article>
            <article className="single-image">
                <h3>Fluid Image/SVG</h3>
                <Image fluid={data.fluidImage.childImageSharp.fluid}/>
            </article>
        </section >
    )
}

export default Images
