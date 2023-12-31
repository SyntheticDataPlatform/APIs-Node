//const db= require("../../connectivity/general/connectors/dbConnections/postgresqlConnect")
const dbConnection = require("../../connectivity/general/connectors/dbConnections/dbGenericConnector")
const queryBuilder = require('../../general/datatier/reusableQueries');
const express = require("express");
const router = express.Router();
const datastructuresBuilder = require("../../builders/buildComplexDataStructures");
const fs = require("fs");

router.get("/namedstructure", async(req, res) => {
    const count = req.query.count || 5000;
    if (count > 5000)
    {
       let count = 5000;
    }
    const datastructurename = req.query.datastructurename || "Person Demographics";
    res.setHeader("Content-Type", "text/plain");
    console.log(datastructurename)
    dataResults = await datastructuresBuilder.buildComplexDataStructure(datastructurename,count);
    res.send(dataResults);
});

module.exports = router;
