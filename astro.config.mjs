import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "correspondre aujourd'hui",
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
          label: 'Avant-propos',
          link: '/',
        },
        {
          label: 'Formules épistolaires',
          autogenerate: { directory: 'formules-epistolaires' },
        },
        {
          label: 'Langage épicène',
          link: '/epicene/',
        },
        {
          label: 'Majuscules et minuscules',
          link: '/casse/',
        },
        {
          label: 'Règles de typographie',
          link: '/typographie/',
        },
        {
          label: 'Nétiquette',
          link: '/netiquette/',
        },

        {
          label: 'Publications',
          link: '/publications/',
        },
      ],
    }),
  ],
})
