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
  navigation: {
    enabled: true,
    config: {
      additionalFields: [
        "audience",
        { name: "my_custom_field", type: "boolean", label: "My custom field" },
      ],
      contentTypes: ["api::page.page"],
      contentTypesNameFields: {
        "api::page.page": ["title"],
      },
      pathDefaultFields: {
        "api::page.page": ["slug"],
      },
      allowedLevels: 2,
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
  "ai-text-generation": {
    enabled: true,
    config: {
      apiToken: process.env.OPEN_AI_API_TOKEN,
    },
  },
  "strapi-chatgpt": {
    enabled: true,
  },
  "import-export-entries": {
    enabled: true,
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
      teamFilter: process.env.VERCEL_DEPLOY_PLUGIN_TEAM_FILTER,
      roles: ["strapi-super-admin"],
    },
  },
});
