import express from 'express';

import funcFromfind from './find/controller.js';

const tableName = "BillsTable.json";
const tablePath = "Data/BillsTable.json";
const configPath = "Config/Schemas/BillsTable.json";

const router = express.Router();

router.get('/find/:pk', (req, res) => funcFromfind({ req, res, inTablePath: tablePath }));

export { router };