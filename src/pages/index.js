import React from "react"
import Layout from "../component/Layout"

const Home = () => {
  return (
    <Layout>
      <h1 style={{color:"blue",textTransform:"uppercase"}}>Hello lads. Inline styles take more preference than global styles.</h1>
      <p>But I'm controlled by something else. Help</p>
      <h3>I'm also controlled by the global CSS values within the Layout component</h3>
    </Layout>
  )
}

export default Home