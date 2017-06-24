// TODO: handle file not found error
const Airtable = require('airtable');
const moment = require('moment');
const Promise = require('bluebird');
const config = require('./config.json');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: config.key
});
const base = Airtable.base(config.base);
// base('24Jun');
const table = Promise.promisifyAll(base(moment().format('DDMMM')));

const startAsync = (difficulty, mood, description) => {
    return table.createAsync({
        Description: description,
        Difficulty: difficulty,
        Mood: mood,
        Start: moment()
    });
}

const endAsync = () => {
    return new Promise((resolve, reject) => {
        // Find record which have no end date
        let prevTask = null;
        // NOTE: Assume there is at most one matched record
        table.select({
            filterByFormula: '{End} = ""',
            maxRecords: 1
        }).eachPage((records, fetchNextPage) => {
            records.forEach(function(record) {
                prevTask = record;
            });
            fetchNextPage();
        }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(prevTask);
            }
        });
    })
        .then((task) => {
            if (task) {
                return task.updateFields({
                    'End': moment()
                })
            } else {
                return null;
            }
        })
}
