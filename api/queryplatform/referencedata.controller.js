const dbConnection = require("../../connectivity/general/connectors/dbConnections/dbGenericConnector")
const express = require("express");
const router = express.Router();
const fs = require("fs");
let rdbmsType = process.env.rdbms;

/*
*     Reference Data
*/

router.get('/applications', function (req, res) {
    let strQuery = 'select * from refdata_application ';
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
 *  Applications By Specific Vendor
 */
router.get('/applicationsbyappcode/:applicationid', function (req, res) {
    const codeVal = req.params.applicationid;
    let strQuery = 'select * from refdata_application where applicationcustomcode = '+codeVal;
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


router.get('/codesets', function (req, res) {
    let strQuery = 'select * from refdata_codeset';
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

/*
 *   Codeset Crossmaps By Specific Crossmap
 */
router.get('/codesetstocrossmaps', function (req, res) {
    let strQuery = 'select * from refdata_codesets_crossmaps';
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
router.get('/codesetscrossmapsbycrossmap/:crossmapid', function (req, res) {
    const codeVal = req.params.crossmapid;
    let strQuery = 'select * from refdata_codesets_crossmaps where implcodesetsid = '+codeVal;
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

router.get('/countries', function (req, res) {
    let strQuery = 'select * from refdata_countries';
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

router.get('/devicetypes', function (req, res) {
    let strQuery = 'select * from refdata_devicetypes';
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

router.get('/industries', function (req, res) {
    let strQuery = 'select * from refdata_industries';
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
router.get('/industriestobusiness', function (req, res) {
    let strQuery = 'select * from refdata_industriestobusiness';
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
router.get('/industrystd', function (req, res) {
    let strQuery = 'select * from refdata_industrystd';
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
router.get('/industrystdtoeventtypes', function (req, res) {
    let strQuery = 'select * from refdata_industrystd_eventtypes';
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
router.get('/legalentities', function (req, res) {
    let strQuery = 'select * from refdata_legalentities';
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

router.get('/operationtype', function (req, res) {
    let strQuery = 'select * from refdata_operationtype';
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

router.get('/organization', function (req, res) {
    let strQuery = 'select * from refdata_organization';
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
 *      Organizations By Specific Legal Entiyy
 */
router.get('/organizationbylegalentity/:legalentityid', function (req, res) {
    const codeVal = req.params.legalentityid;
    let strQuery = 'select * from refdata_organization where legalentityguid ='+"'"+codeVal+"'";
    console.log("Query: " +strQuery);
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

router.get('/professiontypes', function (req, res) {
    let strQuery = 'select * from refdata_professiontypes';
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

router.get('/regextypes', function (req, res) {
    let strQuery = 'select * from refdata_regextypes';
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

router.get('/rulesets', function (req, res) {
    let strQuery = 'select * from refdata_rulesets';
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

router.get('/rulesetsdefinitions', function (req, res) {
    let strQuery = 'select * from refdata_rulesetsdefinitions';
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
 *   RuleSet Deifinition By Specific Codeset
 */
router.get('/rulesetsdefinitionbyruleset/:rulesetid', function (req, res) {
    const codeVal = req.params.rulesetid;
    let strQuery = 'select * from impl_rulesetsdefinitions where rulesetid ='+codeVal;
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

router.get('/sensitivityflags', function (req, res) {
    let strQuery = 'select * from refdata_sensitivityflag';
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

router.get('/statuses', function (req, res) {
    let strQuery = 'select * from refdata_status';
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

router.get('/terminologystd', function (req, res) {
    let strQuery = 'select * from refdata_terminologystd';
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

router.get('/timezones', function (req, res) {
    let strQuery = 'select * from refdata_timezones';
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

router.get('/usstates', function (req, res) {
    let strQuery = 'select * from refdata_usstates';
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

router.get('/vendors', function (req, res) {
    let strQuery = 'select * from refdata_vendor';
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

module.exports = router;