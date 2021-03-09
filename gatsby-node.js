const path = require('path')

// create pages dynamically

// Destructure graphql and actions
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // 
    const result = await graphql(`
        query GetProducts {
            products:allContentfulProduct {
            nodes {
                slug
                }
            }
        }`
    )
    // Function for creating pages after grabbing query.
    result.data.products.nodes.forEach((product)=>{
        // The actual create page function
        createPage({
            // Place where pages are made
            path:`/products/${product.slug}`,
            // The template we're using to make the page
            component: path.resolve(`src/templates/product-template.js`),
            // Finds something specific to latch to
            context: {slug:product.slug}
        })
    })
}

