

module.exports.index = function (req, res) {
    var https = require('https');
    https.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10/albums/', (resp) => {
        var data = "";
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            res.render('myAlbum', { title: 'My Albums', albums: JSON.parse(data) })
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}