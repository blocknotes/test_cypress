/// <reference types="Cypress" />

function transaction_begin() {
  return fetch('http://localhost:3000/__cypress__/command', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'transaction_begin' })
  })
}

function transaction_rollback() {
  return fetch('http://localhost:3000/__cypress__/command', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'transaction_rollback' })
  })
}

const appTransaction = (runTest) => {
  // runTest()

  transaction_begin().then(response => {
    runTest()
  })
  // runTest()
  // transaction_rollback()
}

export default appTransaction
