// requires
var db = require('./db-mock.json')
const fastify = require('fastify')({ logger: true })
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
fastify.get('/api/stocks', async (request, reply) => {
  return db.stocks
})

fastify.post('/api/stocks', async (request, reply) => {
	db.stocks.acme.push(request.body.acme)
	db.stocks.global.push(request.body.global)
	writeDb().then((response)=> reply.code(201).send())
})

fastify.get('/api/investors:name', async (request, reply) => {
	if (request.query.name) {
		if (request.query.name === 'test') reply.code(500).send('error')
		else return db.investors.filter(item => item.name === request.query.name)
	}
	else return db.investors
})

fastify.get('/api/auth/stocks', async (request, reply) => {
	if (request.headers && request.headers.authorization && request.headers.authorization === 'Bearer xxxxx.yyyyy.zzzzz') return db.stocks
	else reply.code(401).send('error')
})

fastify.post('/api/auth/stocks', async (request, reply) => {
	if (request.headers && request.headers.authorization && request.headers.authorization === 'Bearer xxxxx.yyyyy.zzzzz') {
		db.stocks.acme.push(request.body.acme)
		db.stocks.global.push(request.body.global)
		writeDb().then((response)=> reply.code(201).send())
	} else reply.code(401).send('error')
})

fastify.get('/api/auth/investors:name', async (request, reply) => {
	if (request.headers && request.headers.authorization && request.headers.authorization === 'Bearer xxxxx.yyyyy.zzzzz') {
		if (request.query.name) return db.investors.filter(item => item.name === request.query.name)
		else return db.investors
	} else reply.code(401).send('error')
})


// Server startup
fastify.listen({ port: 3000 })
  .then((address) => console.log(`server listening on ${address}`))
  .catch(err => {
    console.log('Error starting server:', err)
    process.exit(1)
  })
