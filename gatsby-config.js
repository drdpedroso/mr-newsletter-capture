module.exports = {
  siteMetadata: {
    title: `Mundo React`,
    author: {
      name: "Mundo React",
      image: "/img/me.png",
      biography: "Um newsletter semanal com tudo o que você precisa saber sobre React. \
        Sem basteira, sem spam e sem mimimi",
    },
    networks: [
      "mailto:drdpedroso@gmail.com",
    ],
    about: `<p>Existem muitas listas de e-mails sobre as novidades do React pelo mundo, a maioria delas em inglês. \
     Eu morei muito tempo na Europa e, ao voltar pro Brasil, senti que muitos dos desenvolvedores que eu conversava nunca estavam tão entusiasmados quanto eu sobre algo novo no ecossistema do React ou do JavaScript. \
      Mais tarde fui perceber que, pela maior parte do conteudo ser em inglês, a interpretação do que estava escrito ou até um entendimento básico não aconteciam. Isso quando a pessoa tentava ler.\
      Isso me fez ter vontade de democratizar esse contéudo de alguma maneira. Foi ai que surgiu o <strong>Mundo React</strong>.
    </p>`
  },
  plugins: [
    `gatsby-plugin-tslint`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://eduardopedroso.us5.list-manage.com/subscribe/post?u=3aab6b0d660673d9e587955cb&amp;id=c84e94d9aa', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-emoji-unicode`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-haezl",
        short_name: "haezl",
        start_url: "/",
        background_color: "#eeeeee",
        theme_color: "#0c9ed1",
        display: "standalone",
        icon: "static/img/me.png",
        include_favicon: true,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        // Don't cache-bust JS or CSS files, and anything in the static directory,
        // since these files have unique URLs and their contents will never change
        dontCacheBustUrlsMatching: /(\.js$|\.css$|static\/)/,
        runtimeCaching: [{
            // Use networkFirst
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `networkFirst`,
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`,
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `staleWhileRevalidate`,
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          primaryColor: "#0c9ed1",
        },
      },
    },
  ],
  pathPrefix: "/img",
}