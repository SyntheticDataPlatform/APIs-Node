  
var express = require('express');
const router = express.Router();
// Constants
const apihealthcontroller = require("./apitesting.controller");
const datamodelcontroller = require("./queryplatform/datamodel.controller");
const dataplatformcontroller = require("./queryplatform/dataplatform.controller");
const hl7controller = require("./industrystds/hl7.controller");
const refdatacontroller = require("./queryplatform/referencedata.controller");
const termdatacontroller = require("./queryplatform/termsdata.controller");
const datatiercontroller = require("./queryplatform/datatier.controller");
const dataegenerationcontroller = require("./datagenerators/dataattributegenerator.controller");
//const datarndmcontroller = require("./randomquerydata/randomdata.controller");
//const generatedatastructurescontroller = require("./datagenerators/datastructure.controller");
//const dataegeneratedcontroller = require("../LegacyCode/api/querydata/datagenerated.controller");
//const datamanagementcontroller = require("../LegacyCode/api/upsertdata/datamanagement.controller");
//const upsertdataexistingcontroller = require("./upsertdata/dataexisting.controller");
//const impldatacontroller = require("../LegacyCode/api/querydata/implementationdata.controller");

// Defined Specific Routers - Tied to Constants
// API Health
router.use('/api/apihealth', apihealthcontroller)
// Generate Data
router.use('/api/generatedata/generate', dataegenerationcontroller)
//router.use('/api/generatedata/generatedatastructures', generatedatastructurescontroller)
// Industry Stds - HL7
router.use('/api/industrystds', hl7controller)
// Query Platform
router.use('/api/queryplatform/datamodel', datamodelcontroller)
router.use('/api/queryplatform/dataplatform', dataplatformcontroller)
router.use('/api/queryplatform/referencedata', refdatacontroller)
router.use('/api/queryplatform/terminologydata', termdatacontroller)
router.use('/api/queryplatform/datatier', datatiercontroller)
//router.use('/api/queryplatform/randomized', datarndmcontroller)
//router.use('/api/queryplatform/dataexisting', dataexistingcontroller)
//router.use('/api/queryplatform/datagenerated', dataegeneratedcontroller)
//router.use('/api/upsertdata/dataexistting', upsertdataexistingcontroller)
//router.use('/api/upsertdata/datamanagement', datamanagementcontroller)
//router.use('/api/queryplatform/implementationdata', impldatacontroller)
module.exports = router;
