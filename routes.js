module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('pages/index', {
			title: "Home | Small Project",
			active: 'home'
		});
	});

	app.get('/about', function(req, res) {
		var facts = [
			"Born in Utah",
			"I used to be a snowboarding instructor",
			"I have a dog named Lyla"
		];

		res.render('pages/about', {
			title: "About | Small Project",
			facts: facts,
			active: 'about'
		});
	});
}