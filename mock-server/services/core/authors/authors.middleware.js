const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

	router.get('/authors', (req, res, next) => {
		const courses = server.db.getState().courses;
		const authorsArrays = courses.map(c => c.authors);
		const authorsWithPossibleDublicates = [].concat.apply([], authorsArrays);
		const authors = [...new Set(authorsWithPossibleDublicates)]

		res.json(authors);
	});
	
	return router;
};