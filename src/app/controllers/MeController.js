const Course = require('../models/Course');
const { multipleMongosseToObject } = require('../../ulti/mongoose');

class MeController {
    // [GET] /me
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: multipleMongosseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
