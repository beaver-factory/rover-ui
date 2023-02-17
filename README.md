# Mars Rover Image Viewer v2

## CI

### Formatting

Prettier is used to format code in this repo.
To check which local files do not meet the prettier rules, run `npm run format_check` to print a list of files.

When pushing to `main` or creating a pull request to `main`, github actions will run the CI workflow in `.github/workflows/main.yaml` which will check if all files meet the prettier rules.

To format all files produced from `npm run format_check`, execute `npm run format` which will rewrite the files to ensure they meet the formatting rules.

### Linting

In this repo, ESLint with TypeScript support is used for linting. The current setup uses the Airbnb config with an extra package for TypeScript support ([found here](https://www.npmjs.com/package/eslint-config-airbnb-typescript)) with a few custom rules. Any formatting from the config is ignored and left up to Prettier instead.

To run the linting script, use the command

```
npm run lint
```

which will show any linting errors that have been picked up. To fix the linting errors which can be resolved automatically, run the linting fix script with the command

```
npm run lint:fix
```

Any errors remaining after this command will have to be resolved manually.

These linting commands are also part of the CI workflow found in `.github/workflows/main.yaml` and any errors will cause the GitHub Action to fail. For the action to pass, use the two commands above to resolve the linting errors locally and try again.
