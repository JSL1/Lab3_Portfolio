let ReferencesModel = require('../models/references');

module.exports.add = async function (req, res, next) {
    try {
        let newReference = ReferencesModel(req.body);
        let result = await ReferencesModel.create(newReference);
        console.log(result);
        res.json({
            success: true,
            message: "Reference added successfully.",
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
        let referenceId = req.params.id;
        let reference = await ReferencesModel.findOne({_id: referenceId });

        res.json({
            success: true,
            message: "Reference retrieved successfully.",
            data: reference
        });
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

module.exports.update = async function(req,res, next) {
    try {
        let referenceId = req.params.id;
        let updatedReference =  ReferencesModel(req.body);
        updatedReference._id = referenceId;

        console.log(referenceId);
        let result = await ReferencesModel.updateOne({_id: referenceId }, updatedReference);
        console.log(result);
        console.log("yo peep this");
        console.log(req.params.id);
        console.log(req.body);
        if(result.modifiedCount > 0) {
            res.json({
                success: true,
                message: "Reference updated successfully"
            });
        } else {
            throw new Error('Reference not updated. Are you sure it exists?');
        }
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

module.exports.remove = async function(req, res, next) {
    try {
        let referenceId = req.params.id;

        let result = await ReferencesModel.deleteOne({_id: referenceId});
        console.log(result);

        if(result.deletedCount > 0) {
            res.json({
                success: true,
                message: "reference deleted successfully."
            });
        } else { 
            throw new Error('Reference not deleted, are you sure it exists?');
        }
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

module.exports.getAll = async function(req, res, next) {
    try {
        let list = await ReferencesModel.find({});
        res.json({
            success: true,
            message: "Reference list retreived successfully.",
            data: list
        });
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}