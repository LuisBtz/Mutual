// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import imageType from './objects/imageType'
import spec from './objects/spec'
import specs from './objects/specs'
import slide from './objects/slide'
import slider from './objects/slider'
import addLink from './objects/addLink'
import press from './objects/press'
import blockModule from './objects/blockModule'
import project from './objects/project'
import projectsHome from './objects/projectsHome'
import instagram from './objects/instagram'

import homePage from './documents/homePage'
import aboutPage from './documents/aboutPage'
import contactPage from './documents/contactPage'
import settingsPage from './documents/settingsPage'
import projects from './documents/projects'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    imageType,
    spec,
    specs,
    slide,
    slider,
    addLink,
    press,
    blockModule,
    project,
    projectsHome,
    instagram,

    homePage,
    aboutPage,
    contactPage,
    settingsPage,
    projects
  ]),
})
