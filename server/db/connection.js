/* I am aware the Cluster should be called "portfolio" but Mongo won't let me change the name of a cluster
    and I can't create a NEW one without a premium account, so "Cluster0" will have to do for now. */
const mongoose = require("mongoose");
const uri = process.env.ATLAS_URI || "";

const client = {
    serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true
    },
};

module.exports = async function() {
    try {
        await mongoose.connect(uri, client);
        await mongoose.connection.db.admin().command({ ping: 1});
        console.log(" ==> Backend successfully connected to mongoDB!");
    } catch(err) {
        console.log("Error connecting to Mongodb: " + err);
        await mongoose.disconnect();
    }
}



