import devBundle from './devBundle';
import express from 'express';
const app = express();
devBundle.compile(app);

import path from 'path';
const CURRENT_WORKING_DIR = process.cwd();
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

import template from './../template';
app.get('/', (req, res) => {
	res.status(200).send(template());
});

let port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
	if (err) {
		console.log(err);
	}
	console.info('Server started on port %s.', port);
});

import { MongoClient } from 'mongodb';
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup';
MongoClient.connect(url, (err, db) => {
	console.log('Connected successfully to mongodb server');
	db.close();
});
