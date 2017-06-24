// TODO: handle file not found error
const Airtable = require('airtable');
const moment = require('moment');

const config = require('./config.json');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: config.key
});
const base = Airtable.base(config.base);

const getTable = () => {
    const tableName = moment().format('DDMMM');
    return base(tableName);
}
