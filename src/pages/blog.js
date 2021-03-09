import React from 'react'
import Layout from "../component/Layout"
import * as styles from "../component/blog.module.css"

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>This is our blog page</h1>
                <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi asperiores nesciunt enim voluptatibus autem unde laudantium rerum, obcaecati at odit hic incidunt laborum quaerat excepturi eum repellat voluptas aliquam doloribus cumque quo. Consequuntur dolore, debitis rem est aut vitae reiciendis.</p>
            </div>
        </Layout>
    )
}

export default blog
