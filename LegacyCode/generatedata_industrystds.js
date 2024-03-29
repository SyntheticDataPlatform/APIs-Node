const dbConnection = require("../connectivity/general/connectors/dbConnections/dbGenericConnector")
const queryBuilder = require('../general/datatier/reusableQueries');
const dotenv = require('dotenv');
const path = require("path");
const uuid = require('uuid');
const crypto = require('crypto');
const config = process.env
const express = require("express");
const router = express.Router();
const hl7Builder = require("../builders/industrystds/buildmsgHL7");
const fhirBuilder = require("../builders/industrystds/buildmsgFHIR")
const fs = require("fs");
const dataOutputting = require("../general/platform/dataOutput")
const { data } = require('../general/functions/general/randomFunctions');
//Outputs
const topicOutput = require("../connectivity/general/connectors/kafka-producer");
const { type } = require("os");
// Global Variable for usage in platform
global.__basedir = __dirname;

let outputType = config.outputAdapter;
let componentName;
let methodName;
var dataattributeName;
var runCount;

let systemOutputName;
const args = process.argv.slice(2);

const appName="DataSynthesis";
const requestGUID=uuid.v4();

industryStd = args[0];
runCount = args[1];
processUSState = args[2];
industryStdMessage = args[3];
industryStdEvent = args[4];
// Set Start Value for timing
let auditEventMessage ="";
let startTime = new Date();
const runQuantity = process.env.runQuantity;
componentName = "generate-industrystd";
methodName ="generate-hl7";

let dataResults;

if (industryStd =='hl7')
{ 
    const doc_type = industryStdMessage;
    //TRIGGER EVENT = AO1,AO8,AO3
    const trigger_event = industryStdEvent;
    const count = runCount;
    const state = processUSState;
    const sending_app = "datasynthesis";
    const sending_fac = "datafacility"

    dbConnection.query(queryBuilder.getData(count, state), (err, rows, fields)=>{
        if(err) throw err;
        const tuples = [];
        const modifiedTuples = [];
        rows.forEach((row,i)=>{
            row.rows.forEach((object, index)=>{
                if(tuples.length <= index){
                    tuples[index] = []
                    tuples[index].push(object)
                }
                else {
                    tuples[index].push(object)
                }
            })

        })
        tuples.forEach(record=>{
            modifiedTuples.push(record.reduce(function(result, current){
                return Object.assign(result,current)
            }, {}))
        })
        dataResults = hl7Builder.generateHL7_Record(modifiedTuples, doc_type, trigger_event, count, state, sending_app, sending_fac)
        if(process.env.outputAdapter=='kafka-datapersistence'){
            dataResults.forEach(msg=>{
                dataOutputting.processDataOutput(msg,'generated-hl7',uuid.v4())
            })
        }
        else { 
            fs.writeFileSync('industrystds-test.hl7', dataResults.join('\n').toString(), 'utf8')
        }
        //res.send(dataResults)
    })
}
if (industryStd =='fhir')
{ 
    const count = runCount;
    const state = processUSState;
    const sending_app = "datasynthesis";
    const sending_fac = "datafacility"
    const resourceType = industryStdMessage

    dbConnection.query(queryBuilder.getData(count, state), (err, rows, fields)=>{
        if(err) throw err;
        const tuples = [];
        const modifiedTuples = [];
        rows.forEach((row,i)=>{
            row.rows.forEach((object, index)=>{
                if(tuples.length <= index){
                    tuples[index] = []
                    tuples[index].push(object)
                }
                else {
                    tuples[index].push(object)
                }
            })

        })
        tuples.forEach(record=>{
            modifiedTuples.push(record.reduce(function(result, current){
                return Object.assign(result,current)
            }, {}))
        })
        modifiedTuples.forEach(data=>{
            console.log(data)
            dataResults = fhirBuilder.generateFHIR_Resource(resourceType, data)
            if(process.env.outputAdapter=='kafka-datapersistence'){
                dataResults.forEach(msg=>{
                    dataOutputting.processDataOutput(msg,'generated-fhir',uuid.v4())
                })
            }
            else { 
                fs.writeFileSync(`${resourceType}.json`, JSON.stringify(dataResults), 'utf8')
            }
        })
        //res.send(dataResults)
    })
}

// to run from prompt
// 1. ensure datasynthesis env variables are set
// 2. Generate 10 HL7 ADT A01
// node generatedata_hl7.js hl7 10 TX ADT A01
