const config = require('./config.json');


const normalize = (type, word) => {
    let tags = [];
    if (type == 'Mood') {
        tags = [
            "???",
            "...",
            "Fuck",
            "Angry",
            "OK",
            "Nice"
        ];
    } else if (type == 'Difficulty'){
        tags = [
            "Very Easy",
            "OK",
            "Hard",
            "Fuck",
            "Easy"
        ];
    }
    // Match the first letter, return the original word if not found
    return tags.find((tag) => (tag.toLowerCase()[0] === word.toLowerCase()[0])) || word;
}

module.exports = {
    normalize
};
