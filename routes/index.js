var users = require('../users.json');

exports.view = function(req, res){
    console.log(users.users[0]);
    console.log("FDS");
    res.render('index');
};
