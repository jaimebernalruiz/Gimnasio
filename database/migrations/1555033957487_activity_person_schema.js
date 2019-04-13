'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActivityPersonSchema extends Schema {
    up() {
        this.create('activity_person', (table) => {
            table.increments()
            table.integer('person_id').unsigned().index()
            table.integer('activity_id').unsigned().index()
            table.foreign('activity_id').references('activities.id').onDelete('cascade')
            table.foreign('person_id').references('people.id').onDelete('cascade')
        })
    }

    down() {
        this.drop('activity_people')
    }
}

module.exports = ActivityPersonSchema