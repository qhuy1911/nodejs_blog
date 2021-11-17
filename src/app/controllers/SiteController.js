const Course = require('../models/Course');
const { multipleMongosseToObject } = require('../../ulti/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongosseToObject(courses),
                });
                // res.json(courses);
            })
            .catch(next);

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
