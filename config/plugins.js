module.exports = ({ env }) => ({
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 10, // Default is 5
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
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: process.env.CMS_ACCESS_KEY_ID,
        secretAccessKey: process.env.CMS_SECRET_ACCESS_KEY_ID,
        region: process.env.CMS_DEFAULT_REGION,
        params: {
          Bucket: `${process.env.S3_BUCKET_NAME}/strapi-images`,
        },
        rootPath: "strapi",
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null,
        },
        uploadStream: {
          ACL: null,
        },
      },
    },
  },
});
