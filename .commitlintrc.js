const {
  utils: { getProjects },
} = require('@commitlint/config-nx-scopes');

const { rules } = require('@commitlint/config-conventional');

module.exports = {
  rules: {
    ...rules,
    'scope-enum': async (ctx) => [
      2,
      'always',
      [
        ...(await getProjects(
          ctx,
          ({ name, projectType }) =>
            !name.includes('e2e') && projectType == 'application'
        )),
      ],
    ],
  },
  // . . .
};
