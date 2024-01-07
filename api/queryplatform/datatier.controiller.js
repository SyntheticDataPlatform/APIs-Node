//const db= require("../../connectivity/general/connectors/dbConnections/postgresqlConnect")
const dbConnection = require("../../connectivity/general/connectors/dbConnections/dbGenericConnector")
const queryBuilder = require('../../general/datatier/reusableQueries');
const express = require("express");
const router = express.Router();
const dataattributesGenerator = require("../../builders/buildDataAttributes");
const fs = require("fs");
const buildDataAttributes = require("../../builders/buildDataAttributes");
