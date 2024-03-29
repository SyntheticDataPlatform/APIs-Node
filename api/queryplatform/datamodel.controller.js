//const dbConnection = require("../../connectivity/general/connectors/dbConnections/dbGenericConnector")
const dbConnection = require("../../connectivity/general/connectors/dbConnections/postgresqlConnect")
const express = require("express");
const router = express.Router();
const fs = require("fs");
const statusID = 1;
let dbUsed = process.env.rdbms;

router.get('/dataapis', function (req, res) {

    let strQuery ='select * from datamodel_apis'
    console.log("Query:" + strQuery);
    dbConnection.query(strQuery, function (error, results, fields) {
        if (error) throw error;
        if (results.rows.length > 0)
        {
            res.end(JSON.stringify(results.rows));
            res.status(200).send();
        }
        else
        {
            res.status(200).send("No Data Returned from Query: " +strQuery);
        }
    });
});
router.get('/datatables', function (req, res) {

    let strQuery ='select * from datamodel_datatables'
    console.log("Query:" + strQuery);
    dbConnection.query(strQuery, function (error, results, fields) {
        if (error) throw error;
        if (results.rows.length > 0)
        {
            res.end(JSON.stringify(results.rows));
            res.status(200).send();
        }
        else
        {
            res.status(200).send("No Data Returned from Query: " +strQuery);
        }
    });
});
/*
  *     Data Tables by Specific Data Domain
 */
    router.get('/datatablesbydomain/:datadomainname', function (req, res) {
        const codeVal = req.params.datadomainname;
        let strQuery ='select * from datamodel_datatables where datadomain = '+"'"+codeVal+ "'";
        console.log("Query:" + strQuery);
        dbConnection.query(strQuery, function (error, results, fields) {
            if (error) throw error;
            if (results.rows.length > 0)
            {
                res.end(JSON.stringify(results.rows));
                res.status(200).send();
            }
            else
            {
                res.status(200).send("No Data Returned from Query: " +strQuery);
            }
        });
    });

    router.get('/datadomain', function (req, res) {
        let strQuery ='select * from datamodel_domain'
        dbConnection.query(strQuery, function (error, results, fields) {
        if (error) throw error;
            if (results.rows.length > 0)
            {
                res.end(JSON.stringify(results.rows));
                res.status(200).send();
            }
            else
            {
                res.status(200).send("No Data Returned from Query: " +strQuery);
            }
        });
    });

    module.exports = router;
