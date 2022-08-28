export default ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        digest: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
});
