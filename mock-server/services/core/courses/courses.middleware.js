const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {
	let courses = server.db.getState().courses;

	router.get('/courses', (req, res, next) => {
		let url_parts = url.parse(req.originalUrl, true),
			query = url_parts.query,
			from = query.start,
			to = +query.start + +query.count,
			sort = query.sort,
			queryStr = query.query;

		let localCourses = courses.slice();
		localCourses = filterByQuery(queryStr, localCourses);

		if (localCourses.length < to) {
			to = localCourses.length;
		}
		if(from && to) {
			localCourses = localCourses.slice(from, to);
		}
		
		res.json(localCourses);
	});

	router.delete('/courses/:id', (req, res, next) => {
		const id = req.params.id;
		console.log(`Before removing: ${courses.length}`)
		console.log(`Courses delete request. Id: ${id}.`);

		courses = [...courses.filter((c) => c.id != id)];
		console.log(`After removing: ${courses.length}`)
		res.json(true);
	});
	
	return router;
};

function filterByQuery(queryStr, localCourses) {
	if (queryStr) {
		const queryParams = parseQuery(queryStr);

		let filteredCourses = [];
		queryParams.forEach(param => {
			const filtered = localCourses
				.filter(c => c[param.key].toString().toUpperCase()
											.includes(param.value.toString().toUpperCase()));
			filtered.forEach(course => filteredCourses.push(course));
		})

		localCourses = Array.from(new Set(filteredCourses));
	}

	return localCourses;
}

function parseQuery(query) {
	query = query.replace('?', '');
	const segments = query.split('_');
	let queryParams = [];
	segments.forEach(segment => {
		const keyValue = segment.split(':');
		queryParams.push({
			key: keyValue[0],
			value: keyValue[1]
		})
	})

	return queryParams;
}
