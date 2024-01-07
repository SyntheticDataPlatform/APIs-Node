  
var express = require('express');
const router = express.Router();
// Constants
const apihealthcontroller = require("./apitesting.controller");
const dataexistingcontroller = require("../LegacyCode/api/querydata/dataexisting.controller");
const dataegeneratedcontroller = require("../LegacyCode/api/querydata/datagenerated.controller");
const datamanagementcontroller = require("../LegacyCode/api/upsertdata/datamanagement.controller");
const datamodelcontroller = require("./queryplatform/datamodel.controller");
const dataplatformcontroller = require("./queryplatform/dataplatform.controller");
const datarndmcontroller = require("./randomquerydata/randomdata.controller");
const generatedatacontroller = require("./datagenerators/dataattributegenerator.controller");
const generatedatastructurescontroller = require("./datagenerators/datastructure.controller");
const hl7controller = require("./industrystds/hl7.controller");
const impldatacontroller = require("../LegacyCode/api/querydata/implementationdata.controller");
const refdatacontroller = require("./queryplatform/referencedata.controller");
const termdatacontroller = require("../LegacyCode/api/querydata/termsdata.controller");
//const upsertdataexistingcontroller = require("./upsertdata/dataexisting.controller");
// Defined Specific Routers - Tied to Constants
router.use('/api/apihealth', apihealthcontroller)
router.use('/api/generatedata/generate', generatedatacontroller)
router.use('/api/generatedata/generatedatastructures', generatedatastructurescontroller)
router.use('/api/industrystds', hl7controller)
router.use('/api/querydata/dataexisting', dataexistingcontroller)
router.use('/api/querydata/datagenerated', dataegeneratedcontroller)
router.use('/api/querydata/datamodel', datamodelcontroller)
router.use('/api/querydata/dataplatform', dataplatformcontroller)
router.use('/api/querydata/implementationdata', impldatacontroller)
router.use('/api/querydata/referencedata', refdatacontroller)
router.use('/api/querydata/randomized', datarndmcontroller)
router.use('/api/querydata/terminologydata', termdatacontroller)
//router.use('/api/upsertdata/dataexistting', upsertdataexistingcontroller)
router.use('/api/upsertdata/datamanagement', datamanagementcontroller)

module.exports = router;
