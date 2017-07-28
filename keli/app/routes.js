module.exports = function(app,serverInfo) {
    var login_api = require('./loginapi.js')(serverInfo);

    app.get('/', function (req, res){
        console.log("from /");
        res.render('index');
    });
    app.get('/partials/:name', function (req, res) {
        var name = req.params.name;
        console.log("Route  [" + name + "]");
        res.render('partials/' + name);
    });

    app.get('/partials/shared/:name', function (req, res) {
        var name = req.params.name;
        console.log("Route [" + name + "]");
        res.render('partials/shared/' + name);
    });

    app.post('/api/login' ,login_api.login);
    app.post('/api/refresh', login_api.refresh);

};

