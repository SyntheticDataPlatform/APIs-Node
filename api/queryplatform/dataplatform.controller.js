const dbConnection = require("../../connectivity/general/connectors/dbConnections/dbGenericConnector")
const express = require("express");
const router = express.Router();
const fs = require("fs");
let rdbmsType = process.env.rdbms;

router.get('/datageneration', function (req, res) {
    let strQuery = 'select * from platform_datageneration';
    dbConnection.query(strQuery, function (error, results, fields) {
        if (error) throw error;
        if (results.rows.length > 0){
            res.end(JSON.stringify(results.rows));
            res.status(200).send();
        }
        else {
            res.status(500).send("No Data Available: "+strQuery);
        }
    });
});

router.get('/dataattributes', function (req, res) {
    let strQuery ='select * from platform_dataattributes'
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
router.get('/datastructures', function (req, res) {
    let strQuery ='select * from platform_datastructures'
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

router.get('/datastructuresdtl', function (req, res) {
    let strQuery ='select * from platform_datastructures_dtl'
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
  *     Platform Configuration Details by Data Structure
 */
router.get('/platformdatastructuresdtlbydatastructure/:datastructureid', function (req, res) {
    const codeVal = req.params.datastructureid;
    let strQuery ='select * from platform_datastructures_dtl where platformdatastructuresid = ' + codeVal;
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