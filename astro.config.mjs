import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "correspondre aujourd'hui - sous la loupe",
      locales: {
        root: {
          label: 'Français',
          lang: 'fr',
        },
      },
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Formules épistolaires',
          autogenerate: { directory: 'elements' },
        },
        {
          label: 'Langage épicène',
          autogenerate: { directory: 'publications' },
        },
        {
          label: 'Majuscules et minuscules',
          link: '/casse/',
        },
        {
          label: 'Règles de typographie',
          autogenerate: { directory: 'publications' },
        },
        {
          label: 'Nétiquette',
          autogenerate: { directory: 'publications' },
        },
        {
          label: 'Circonstances exceptionnelles',
          autogenerate: { directory: 'publications' },
        },
        {
          label: 'Publications',
          autogenerate: { directory: 'publications' },
        },
      ],
    }),
  ],
})
