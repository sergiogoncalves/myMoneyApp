const express = require('express')

module.exports = function(server){

    //Base URL for all routes
    const router = express.Router()
    server.use('/api', router)

    //Routes to Cycle of payments

    const BillingCycle = require('../api/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}