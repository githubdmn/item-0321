

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const server = process.env.DB_SERVER;
const dbname = process.env.DB_NAME;
const dblink = `mongodb+srv://${username}:${password}@${server}/${dbname}`;

const mongoose = require('mongoose');

const Model = require('./model-item');

class Database {
    constructor() {
        mongoose.connect(dblink,
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => { console.log('Successfully connected to a db\n'); })
            .catch(() => { console.error('Failed to connect to a db\n'); });
    }

    disconnect() {
        mongoose.disconnect()
            .then(() => { console.log('The connection is closed\n'); })
            .catch(() => { console.error('The connection failed to close\n'); });
    }
}
module.exports = new Database();
module.exports.Items = mongoose.model('Items', new mongoose.Schema(Model.Item));



