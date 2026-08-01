let ServicesModel = require('../models/services');

module.exports.add = async function (req, res, next) {
    try { 
        let newService = ServicesModel(req.body);

        let result = await ServicesModel.create(newService);

        console.log(result);

        res.json({
            success: true,
            message: " added successfully.",
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
        let serviceId = req.params.id;
        let service = await ServicesModel.findOne({_id: serviceId});

        res.json({
            success: true,
            message: "Service recieved successfully",
            data: service
        });
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

module.exports.update = async function(req, res, next) {
    try {
        let serviceId = req.params.id;
        let updatedService = ServicesModel(req.body);
        updatedService._id = serviceId;

        let result = await ServicesModel.updateOne({ _id: serviceId }, updatedService);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.json({
                success: true,
                message: "Service updated successfully."
            });
        } else {
            throw new Error('Service not updated, are you sure it exist?');
        }
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

module.exports.remove = async function (req, res, next) {
    try {
        let serviceId = req.params.id;

        let result = await ServicesModel.deleteOne({_id: serviceId });
        console.log(result);

        if(result.deletedCount > 0) {
            res.json({
                success:true,
                message: "Service deleted successfully."
            });
        } else {
            throw new Error('Service not deleted, are you sure it exists?');
        }
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}
module.exports.getAll = async function(req, res, next) {
    try {
        let list = await ServicesModel.find({});
        res.json({
            success: true,
            message: "Service list retrieved successfully.",
            data: list
        });
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}