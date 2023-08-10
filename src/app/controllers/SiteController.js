class NewController {
    // GET /home
    index(req,res){
        res.render('home')
    }

    // GET /seach
    seach(req,res){
        res.render('seach')
    }
}

module.exports = new NewController;