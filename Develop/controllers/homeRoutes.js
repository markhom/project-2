const router = require('express').Router();
// const { User } = require('../models/User');
// const Project = require('../models/Project');
const { User, Project} = require ('../models')

// GET /
router.get('/', async (req, res) => {
    const projects = (await Project.findAll({
        include: [
            {
                model: User,
                attributes: ['name'],
            }
        ]
    })).map((proj) => {
        proj.get({ plain: true});
    })

    res.json({ projects })
}) 



















module.exports = router;