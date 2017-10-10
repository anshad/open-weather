// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl: 'https://api.openweathermap.org/data/2.5/forecast',
  appId: '78c6b64f54db08d8254473fd536c3bf6',
  cityId: '1277333'
};
