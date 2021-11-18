const Course = require('../models/Course');
const { mongooseToObject } = require('../../ulti/mongoose');
const { renderSync } = require('node-sass');

class CoursesController {
    // [GET] /courses/:slug
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

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/create
    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);

        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}

module.exports = new CoursesController();
