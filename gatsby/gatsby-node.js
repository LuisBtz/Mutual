/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

async function turnProjectIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const projectTemplate = path.resolve('./src/templates/Project.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          projects: allSanityProjects {
            nodes {
              slug {
                current
              }
              projectName
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.projects.nodes.forEach((project) => {
      actions.createPage({
          // url forths new page
          path: `/${project.slug.current}`,
          component: projectTemplate,
          context: {
              language: 'en',
              slug: project.slug.current,
          }
      })
  });
}


exports.createPages = async (params) => {
// Create Pages dynamically
    await Promise.all([
        // 1. Projects
        turnProjectIntoPages(params),

    ])
}




