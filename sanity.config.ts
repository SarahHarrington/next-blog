import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'
import {theme} from 'https://themer.sanity.build/api/hues?default=dfdedf;darkest:19091c&primary=f1dfff'

export default defineConfig({
  name: 'default',
  title: 'sarahdoestech blog',

  projectId: 'rhfs9aiz',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
  theme
})