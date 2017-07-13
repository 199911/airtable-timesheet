const config = require('./config.json');


const normalize = (word) => {
    const tags = [
        "???",
        "...",
        "Fuck",
        "Angry",
        "OK",
        "Nice"
    ];
    // Match the first letter, return the original word if not found
    return tags.find((tag) => (tag.toLowerCase()[0] === word.toLowerCase()[0])) || word;
}

module.exports = {
    normalize
};
