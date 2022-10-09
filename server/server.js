// requires
var db = require('./db-mock.json')
const fastify = require('fastify')()
const fs = require('fs');


// Utility methods
function writeDb(){
	return new Promise(resolve => {
		let data = JSON.stringify(db, null, 2)
		fs.writeFile('./db-mock.json', data, (err) => {
			console.log(err)
			if (err) throw err;
			resolve('ok')
		});
  });
}

// Routes

fastify.get('/api/heroes/:id', async (request, reply) => {
	if (request.params?.id) {
		console.log(request.params.id)
		return db.characters.filter(item => item.id === request.params.id)
	}else return db.characters
})

fastify.put('/api/heroes/:id/xp', async (request, reply) => {
	try {
		let character = db.characters.filter(item => item.id === request.params.id)[0]
		if (request.body) {
			if(request.body.xp) character.xp += request.body.xp
			if(request.body.action) character.log.push(request.body.action)
		}
		
		writeDb().then((response)=> reply.code(201).send())
	} catch (e) {
		reply.code(500).send('error')
	}
})

// Server startup
fastify.listen({ port: 3000 })
  .then((address) => console.log(`server listening on ${address}`))
  .catch(err => {
    console.log('Error starting server:', err)
    process.exit(1)
  })