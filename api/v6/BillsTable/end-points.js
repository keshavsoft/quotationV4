import express from 'express';

import funcFromfind from './find/controller.js';
import funcFrommodify from './modify/controller.js';
import funcFromdel from './del/controller.js';

const tableName = "BillsTable.json";
const tablePath = "Data/BillsTable.json";
const configPath = "Config/Schemas/BillsTable.json";

const router = express.Router();

router.get('/find/:pk', (req, res) => funcFromfind({ req, res, inTablePath: tablePath }));
router.put('/modify', express.json(), (req, res) => funcFrommodify({ req, res, inTablePath: tablePath, inConfigPath: configPath }));
router.delete('/del/:pk', (req, res) => funcFromdel({ req, res, inTablePath: tablePath }));

export { router };