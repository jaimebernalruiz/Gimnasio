'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Activity = use('App/Models/Activity')
const Database = use('Database')
    /**
     * Resourceful controller for interacting with people
     */
class ActivityController {

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
        const activities = await Activity.all()
        response.json({ status: true, activities })
    }

    
    async activitiesNotRegistered({ request, response, view }){
        const { id } = request.post()
        const allActivities =  await Database
        .from('activities')
        let res = []
        const activities = await Database
        .from('activity_person')
        .where('person_id', '!=', id)
        allActivities.forEach(activity => {
            activities.forEach(element => {
                if(element.activity_id == activity.id){
                    res.push(activity)
                }
            });
        });
        response.json({status: true, activities: res})
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
    async show({ params, request, response, view }) {
        try {
            const activities = await Activity.all()
            response.json({ 'status': true, 'acivities': activities })
        } catch {
            response.json({ 'status': false })
        }
    }

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

module.exports = ActivityController