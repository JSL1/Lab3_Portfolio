let ProjectsModel = require('../models/projects');

module.exports.add = async function (req, res, next) {
    try { 
        let newProject = ProjectsModel(req.body);

        let result = await ProjectsModel.create(newProject);

        console.log(result);

        res.json({
            success: true,
            message: "Project added successfully.",
            data: result
        });
    } 
    catch(err) {
        console.log(err);
        next(err);
    }
}

module.exports.getById = async function(req, res, next) {
    try {
        let projectId = req.params.id;
        let project = await ProjectsModel.findOne({_id: projectId});

        res.json({
            success: true,
            message: "Project recieved successfully",
            data: project
        });
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

module.exports.update = async function(req, res, next) {
    try {
        let projectId = req.params.id;
        let updatedProject = ProjectsModel(req.body);
        updatedProject._id = projectId;
        console.log(req.body);
        let result = await ProjectsModel.updateOne({ _id: projectId }, updatedProject);
        console.log(result);
        if (result.modifiedCount > 0) {
            res.json({
                success: true,
                message: "Project updated successfully."
            });
        } else {
            throw new Error('Project not updated, are you sure it exist?');
        }
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

module.exports.remove = async function (req, res, next) {
    try {
        let projectId = req.params.id;

        let result = await ProjectsModel.deleteOne({_id: projectId });
        console.log(result);

        if(result.deletedCount > 0) {
            res.json({
                success:true,
                message: "Project deleted successfully."
            });
        } else {
            throw new Error('Project not deleted, are you sure it exists?');
        }
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}
module.exports.getAll = async function(req, res, next) {
    try {
        let list = await ProjectsModel.find({});
        res.json({
            success: true,
            message: "Project list retrieved successfully.",
            data: list
        });
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}