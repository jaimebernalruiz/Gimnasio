'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PeopleSchema extends Schema {
    up() {
        this.create('people', (table) => {
            table.increments()
            table.string('name', 80).notNullable()
            table.string('lastName', 80)
            table.string('mail', 80)
            table.string('password', 80)
            table.timestamps()
        })
    }

    down() {
        this.drop('people')
    }
}

module.exports = PeopleSchema