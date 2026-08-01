const UsersModel = require('../models/users');

module.exports.add = async function (req, res, next) {
    try { 
        let newUser = UsersModel(req.body);

        let result = await UsersModel.create(newUser);

        console.log(result);

        res.json({
            success: true,
            message: "User added successfully.",
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
        let userId = req.params.id;
        let user = await UsersModel.findOne({_id: userId});

        res.json({
            success: true,
            message: "User recieved successfully",
            data: user
        });
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

module.exports.update = async function(req, res, next) {
    try {
        let userId = req.params.id;
        let updatedUser = UsersModel(req.body);
        updatedUser._id = userId;

        let result = await UsersModel.updateOne({ _id: userId }, updatedUser);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.json({
                success: true,
                message: "User updated successfully."
            });
        } else {
            throw new Error('User not updated, are you sure it exist?');
        }
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

module.exports.remove = async function (req, res, next) {
    try {
        let userId = req.params.id;

        let result = await UsersModel.deleteOne({_id: userId });
        console.log(result);

        if(result.deletedCount > 0) {
            res.json({
                success:true,
                message: "User deleted successfully."
            });
        } else {
            throw new Error('User not deleted, are you sure it exists?');
        }
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}
module.exports.getAll = async function(req, res, next) {
    try {
        let list = await UsersModel.find({});
        res.json({
            success: true,
            message: "User list retrieved successfully.",
            data: list
        });
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}