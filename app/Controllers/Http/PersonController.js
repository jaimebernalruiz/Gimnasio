'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Person = use('App/Models/Person')
const Activity = use('App/Models/Activity')
    /**
     * Resourceful controller for interacting with people
     */
class PersonController {
    /**
     * Show a list of all people.
     * GET people
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        const persons = await Person.all()
        response.json({ status: true, persons })
    }

    async addActivity({ request, response }) {
            const { activity, id } = request.post()
            try {
                const person = await Person.find(id)
                await person.activities().attach(activity)
                person.activities = await person.activities().fetch()
                response.json({ status: true, person })
            } catch (err) {
                console.log(err)
            }
        }

        async backingOutActivity({ request, response }) {
            const { activity, id } = request.post()
            try {
                const person = await Person.find(id)
                person.activities = await person.activities().detach(activity)
                response.json({ status: true, person })
            } catch (err) {
                console.log(err)
            }
        }

        async activitiesPerson({ request, response }) {
            const {  id } = request.post()
            try {
                const person = await Person.find(id)
                person.activities = await person.activities().fetch()
                response.json({ status: true, person })
            } catch (err) {
                console.log(err)
            }
        }
        /**
         * Render a form to be used for creating a new person.
         * GET people/create
         *
         * @param {object} ctx
         * @param {Request} ctx.request
         * @param {Response} ctx.response
         * @param {View} ctx.view
         */
    async create({ request, response, view }) {}

    /**
     * Create/save a new person.
     * POST people
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {}

    /**
     * Display a single person.
     * GET people/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {}

    /**
     * Render a form to update an existing person.
     * GET people/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update person details.
     * PUT or PATCH people/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {}

    /**
     * Delete a person with id.
     * DELETE people/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {}
}

module.exports = PersonController