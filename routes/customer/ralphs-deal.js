/**
 * Created by kenmiyachi on 11/3/16.
 */
var data = require("../../data.json");
exports.view = function(req, res){
    res.render('customer/ralphs-deal', data);
};
