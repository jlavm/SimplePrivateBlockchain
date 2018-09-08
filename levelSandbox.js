/* ===== Persist data with LevelDB ===================================
|  Learn more: level: https://github.com/Level/level     |
|  =============================================================*/
const level = require('level');
const chainDB = './chaindata';
const db = level(chainDB);

module.exports.db = db;

module.exports = {
    // Get data from levelDB with key
    getLevelDBData: function(key) {
        db.get(key, function(err, value) {
            if (err) return console.log('Not found!', err);
            console.log('Value = ' + value);
        })
    },

    // Add data to levelDB with value
    addDataToLevelDB: function(height, newBlock) {
        let i = 0;
        db.createReadStream().on('data', function(data) {
            console.log('data', data)
            i++;
        }).on('error', function(err) {
            return console.log('Unable to read data stream!', err)
        }).on('close', function() {
            console.log('Block #' + height);
            this.addLevelDBData(height, JSON.stringify(newBlock).toString());
        });
    },

    // Add data to levelDB with key/value pair
    addLevelDBData: function(key, value) {
        db.put(key, value, function(err) {
            if (err) return console.log('Block ' + key + ' submission failed', err);
        })
    }

};