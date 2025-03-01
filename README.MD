# Typescript library for [snowplow](https://github.com/paidtowork/snowplow)

This library is used to store types used in [snowplow](https://github.com/paidtowork/snowplow) for static analysis on code related to weather and route planning.

## Development setup using yarn

### Setting up your yarn configuration to update types in the repository.

To populate .yarnrc file
`gcloud artifacts print-settings npm --scope=@mmtplanning`

```yaml
"@mmtplanning:registry" "https://us-east4-npm.pkg.dev/directed-reef-420621/simulation-types/"
"//us-east4-npm.pkg.dev/directed-reef-420621/simulation-types/:_authToken" <auth token>
```

### Yarn commands to pack and publish

```
yarn up
yarn install
yarn pack
yarn npm publish
```

### Google auth command to refresh the access token for connecting to the repository.

`yarn run artifactregistry-login`
