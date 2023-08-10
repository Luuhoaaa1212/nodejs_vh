class NewController {
    // GET /new
    index(req,res){
        res.render('new')
    }

    // GET /new/:slug
    detail(req,res){
        res.send('PAGE NEW DETAIL')
    }
}

module.exports = new NewController;