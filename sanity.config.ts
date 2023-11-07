import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'
import {theme} from 'https://themer.sanity.build/api/hues?default=dfdedf;darkest:19091c&primary=f1dfff'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'Sarah_Does_Tech_Content_Blog',
  title: 'SarahDoesTech Blog',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
  theme
})