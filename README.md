# Test Cypress

Features:
- [test server app](https://github.com/blocknotes/test_rails7) using Ruby on Rails 7;
- [test client app](https://github.com/blocknotes/test_alpinejs) using Alpine.js;
- GitHub action for Cypress tests (using Docker for client/server apps) - [cypress.yml](.github/workflows/cypress.yml);
- [cypress-on-rails](https://github.com/shakacode/cypress-on-rails) as bridge between client and server.

On Cypress:
- [example](cypress/integration/factory_bot_spec.js) using FactoryBot factories;
- [example](cypress/integration/fixtures_spec.js) using Rails fixtures;
- [example](cypress/integration/scenarios_spec.js) using a scenario;
- [example](cypress/integration/commands_spec.js) running some server side checks.

Alternatives:
- using git submodules and [without Docker](https://github.com/blocknotes/test_cypress/releases/tag/no_docker)

## Usage

```sh
# Run the tests (it launches the server and the client first):
yarn test

# Otherwise, launch server and client manually and open Cypress UI:
yarn cy:open

# Or run Cypress tests:
yarn cy:run

# Execute a single spec:
BROWSERSLIST_IGNORE_OLD_DATA=1 yarn run cypress run -s cypress/integration/commands_spec.js
```
