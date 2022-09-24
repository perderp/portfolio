const db = require('../model/db.json');
const viewData = (req, res) => {
    res.render('index', {db:db})
}


module.exports = {
    viewData,
}