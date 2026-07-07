import express from 'express';

import funcFrominsertWithMeta from './insertWithMeta/controller.js';
import funcFromfilterQuery from './filterQuery/controller.js';

const tableName = "ItemsTable.json";
const tablePath = "Data/ItemsTable.json";
const configPath = "Config/Schemas/ItemsTable.json";

const router = express.Router();

router.post('/insertWithMeta', express.json(), (req, res) => funcFrominsertWithMeta({ req, res, inTablePath: tablePath, inConfigPath: configPath }));
router.get('/filterQuery', (req, res) => funcFromfilterQuery({ req, res, inTablePath: tablePath }));

export { router };