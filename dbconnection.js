const { MongoClient } = require('mongodb');
const username = 'system';
const password = 'system';
const client = new MongoClient(`mongodb+srv://${username}:${password}@cluster0.mz7bj0j.mongodb.net/`);
module.exports = client
