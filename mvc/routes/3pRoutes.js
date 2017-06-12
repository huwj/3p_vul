'user strict';
module.exports = function(app) {
    var vul = require('../controllers/3pController');

    //3p APIs
    app.route('/vul/:3p_name')
        .get(3p.list_a_3p_all_vul);
};
