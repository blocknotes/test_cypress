// CypressOnRails: dont remove these command
Cypress.Commands.add('appCommands', function (body) {
  Object.keys(body).forEach(key => body[key] === undefined ? delete body[key] : {});
  const log = Cypress.log({ name: "APP", message: body, autoEnd: false });
  let url = Cypress.config('_railsServerUrl');
  if (!url.endsWith('/')) url += '/';

  return cy.request({
    method: 'POST',
    url: `${url}__cypress__/command`,
    body: JSON.stringify(body),
    log: false,
    failOnStatusCode: false
  }).then((response) => {
    log.end();
    if (response.status !== 201) {
      // expect(response.body.message).to.be.empty
      expect(response.body.message).to.be.undefined
      expect(response.status).to.be.equal(201)
    }
    return response.body
  });
});

Cypress.Commands.add('app', function (name, command_options) {
  return cy.appCommands({name: name, options: command_options}).then((body) => {
    return body[0]
  });
});

Cypress.Commands.add('appScenario', function (name, options = {}) {
  return cy.app('scenarios/' + name, options)
});

Cypress.Commands.add('appEval', function (code) {
  return cy.app('eval', code)
});

Cypress.Commands.add('appCountRecords', function (model, where = {}) {
  return cy.app('count_records', { model, where })
});

Cypress.Commands.add('appCreateRecord', function (model, where = {}) {
  return cy.app('create_record', { model, attrs: where })
});

Cypress.Commands.add('appUpdateRecord', function (model, where = {}, new_attrs = {}) {
  return cy.app('update_record', { model, attrs: where, new_attrs })
});

Cypress.Commands.add('appFactories', function (options) {
  return cy.app('factory_bot', options)
});

Cypress.Commands.add('appFixtures', function (options) {
  cy.app('activerecord_fixtures', options)
});
// CypressOnRails: end

// The next is optional
// beforeEach(() => {
//  cy.app('clean') // have a look at cypress/app_commands/clean.rb
// });

// comment this out if you do not want to attempt to log additional info on test fail
Cypress.on('fail', (err, runnable) => {
  // allow app to generate additional logging data
  Cypress.$.ajax({
    url: '/__cypress__/command',
    data: JSON.stringify({name: 'log_fail', options: {error_message: err.message, runnable_full_title: runnable.fullTitle() }}),
    async: false,
    method: 'POST'
  });

  throw err;
});
