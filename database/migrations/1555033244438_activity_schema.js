'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActivitySchema extends Schema {
    up() {
        this.create('activities', (table) => {
            table.increments()
            table.string('activityName', 80).notNullable()
            table.string('coachName', 80)
            table.date('date')
            table.date('startTime')
            table.date('endTime')
            table.timestamps()
        })
    }

    down() {
        this.drop('activities')
    }
}

module.exports = ActivitySchema