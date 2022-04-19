export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '625e5eb55dfd0252e325de17',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-aq6nc65h',
                  apiId: 'e7e31c0b-a168-4444-b9f6-25115e81f8d6'
                },
                {
                  buildHookId: '625e5eb6254e48301a2de741',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hoxg1v9w',
                  apiId: '27994f9f-a778-4161-b0a1-d1f9f063b7b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Amit-rawat-dev/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hoxg1v9w.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
