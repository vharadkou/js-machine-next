export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dfcbc661aeb52a44a0322bd61652f3f6'),
  },
});
