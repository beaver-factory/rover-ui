# Mars Rover Image Viewer v2

## CI

### Formatting

Prettier is used to format code in this repo.
To check which local files do not meet the prettier rules, run `npm run format_check` to print a list of files.

When pushing to `main` or creating a pull request to `main`, github actions will run the CI workflow in `.github/workflows/main.yaml` which will check if the changed files in the commits of the PR meet the prettier rules.

If the changed files meet the prettier rules:

- the check will pass and show as such on the PR
- you can ensure the changed files will meet the prettier rules by either enabling a prettier extension in your editor, or running the command `npx prettier -w <file>` for each of the files that have been changd.

If they do not:

- the workflow will rewrite the riles (using `npx prettier -w`) and add a new commit to the PR with commit message 'Prettified Code!'.
- note, the PR will not show the check has passed in this scenario
- **if changes are requested before the branch can be merged into main, the local branch must be updated (`git pull origin <branch>`) to include the automated commit to prevent the local and remote branches becoming out of sync**
