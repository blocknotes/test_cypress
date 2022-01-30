# Test Cypress

Features:
- test server app (using Ruby on Rails 7);
- test client app (using Alpine.js);
- GitHub action to run Cypress - [cypress.yml](.github/workflows/cypress.yml);
- [cypress-on-rails](https://github.com/shakacode/cypress-on-rails) as bridge between client and server.

On Cypress:
- [example](cypress/integration/factory_bot_spec.js) using FactoryBot factories;
- [example](cypress/integration/fixtures_spec.js) using Rails fixtures;
- [example](cypress/integration/scenarios_spec.js) using a scenario;
- [example](cypress/integration/commands_spec.js) executing Ruby code for server side checks.

## Setup

```sh
# Server setup
cd server
bin/setup # for development
bin/rails db:test:prepare # for tests
# Client setup
cd client
yarn
```

## Run

```sh
# Run the tests (it launches the server and the client first):
yarn test

# Or launch the server + client manually (foreman required):
foreman start
# And in another shell, open Cypress:
yarn cy:open
```

## Installation

```sh
# Git modules setup
git submodule add https://github.com/blocknotes/test_rails7 server
git submodule add https://github.com/blocknotes/test_alpinejs client
```
