'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Activity extends Model {
    people() {
        return this.belongsToMany('App/Models/Person')
    }
}

module.exports = Activity