const express = require('express')
const app = express()
const faker = require('faker')

// serve files from the public directory
app.use(express.static('public'));

app.set('view engine', 'pug')
app.get('/', (req, res) => { 
    var values = []
	
	for (var i = 0; i < 5; i++) {
		values.push({
			badge: 0,
			title: "Project " + faker.name.title(),
			description: faker.hacker.phrase()
		})
	}

    res.render('index', {title: 'Piggy', values: values})
})

app.listen(3000, () => console.log('Piggy is running on port 3000!'))
