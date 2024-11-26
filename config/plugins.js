module.exports = {
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 15,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary", // Add Cloudinary as the provider
      providerOptions: {
        cloud_name:"dkqlrnz6r", // Use environment variables for sensitive data
        api_key:"853636429845778",
        api_secret:"7YT2li6_wmR2hMQ-TcV1P1OpRyo",
        fetch_format: 'auto',
        secure: true,
      },
      actionOptions: {
        upload: {}, // Default action options
        delete: {}, // Default action options
      },
    },
  },
};
