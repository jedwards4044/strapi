module.exports = ({ env }) => ({
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 23, // Default is 5
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 18,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
