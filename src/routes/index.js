const newRoutes = require('./news')
const siteRoutes = require('./site')

function route(app){

    app.use('/new',newRoutes)
    app.use('/',siteRoutes)

}

module.exports = route;