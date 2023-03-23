export default ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        digest: {
          field: 'slug',
          references: 'title',
        },
        event: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
  transformer: {
    enabled: true,
    config: {
      prefix: '/api/',
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
});
