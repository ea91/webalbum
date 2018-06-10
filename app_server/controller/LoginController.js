module.exports.index = function (req, res) {
    res.render('login', { title: 'login', error: false })
}

module.exports.index.post = function (req, res) {
    if(req.body.email && req.body.password) return res.redirect('/myAlbums');
    res.render('login', { title: 'login', error: true })
}