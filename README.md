# Mars Rover Image Viewer v2

## CI

### Formatting

Prettier is used to format code in this repo.
To check which local files do not meet the prettier rules, run `npm run format_check` to print a list of files.

When pushing to `main` or creating a pull request to `main`, github actions will run the CI workflow in `.github/workflows/main.yaml` which will check if all files meet the prettier rules.

To format all files produced from `npm run format_check`, execute `npm run format` which will rewrite the files to ensure they meet the formatting rules.
