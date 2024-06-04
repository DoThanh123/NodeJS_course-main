const Courses = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    //[GET]
    index(req, res, next) {
        Courses.find({})
            .then((course) => {
                res.render('home', {
                    course: multipleMongooseToObject(course),
                })
            })
            .catch(next)
    }

    //[GET] /Search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController()
