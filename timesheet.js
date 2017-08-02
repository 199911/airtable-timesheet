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

const startAsync = (mood, difficulty, description, startTime) => {
    return table.createAsync({
        Description: description,
        Difficulty: difficulty,
        Mood: mood,
        Time: moment(),
        Duration: startTime && `${moment().diff(moment(startTime), 'minute')} minutes`
    });
}

const listAsync = () => {
    return new Promise((resolve, reject) => {
        let tasks = [];
        table.select({
        }).eachPage((records, fetchNextPage) => {
            records.forEach(function(record) {
                tasks.push(record);
            });
            fetchNextPage();
        }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(tasks);
            }
        });
    });
}

module.exports = {
    startAsync,
    listAsync
};
