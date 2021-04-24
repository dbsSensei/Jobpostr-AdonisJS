'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokensSchema extends Schema {
  up () {
    this.create('jobs', (table) => {
      table.increments()
      table.string('title')
      table.string('link')
      table.string('description')
      table.string('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('jobs')
  }
}

module.exports = TokensSchema
