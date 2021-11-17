const Course = require('../models/Course');
const { mongooseToObject } = require('../../ulti/mongoose');

class CoursesController {
    // [GET] /news/:slug
    show(req, res, next) {
        // res.send(req.params.slug)
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
