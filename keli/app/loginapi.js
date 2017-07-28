module.exports = function (serverInfo) {
    var port = serverInfo.backend_port;
    function isVoid(obj){
        switch(typeof(obj)){
            case "undefined":
            case "object":
                for(var x in obj){
                    if(obj.hasOwnProperty(x))
                        return false;
                    else
                        return true;
                }
                return true;
            case "number":
            case "boolean":
                return false;
                break;
            case "string":
                if(obj == "")
                    return true;
                else
                    return false;
            default:
                return false;
        }
    };

    return {
        login:function(req,res)        {
            console.log("Log-in Invoked");
            var request = require('request');
            var body = req.body;
            var agentId = body.aID;
            var host = req.headers.host.split('.')[0];
            var appName = req.headers.appname;

            function callback(error, response, body) {
                try {
                    console.log(error);
                    console.log("Login Response", body)
                    if (!error && response.statusCode == 200) {
                        var responseProfile;
                        if (toString.call(body) === "[object Object]") {
                            responseProfile = body;
                        }
                        else {
                            responseProfile = JSON.parse(body);
                        }
                        console.log(responseProfile);
                        if (responseProfile.status == 0) {
                            chalkToken = responseProfile.response.token;

                            if (isVoid(responseProfile.response.agentInfo.agentPhoto)) {
                                responseProfile.response.agentInfo.agentPhoto = 'images/default.png';
                                res.json({
                                    "status": "success",
                                    "message": "",
                                    "profile": responseProfile.response.agentInfo,
                                    "auth_token": responseProfile.response.token,
                                    "refreshToken": responseProfile.response.refreshToken,
                                });
                            }
                            else
                                res.json({
                                    "status": "success",
                                    "message": "",
                                    "profile": responseProfile.response.agentInfo,
                                    "auth_token": responseProfile.response.token,
                                    "refreshToken": responseProfile.response.refreshToken,
                                });
                        } else {
                            res.json({
                                "status": "failure",
                                "message": responseProfile.edesc,
                                "errorcode": responseProfile.ec
                            });
                        }
                    } else {
                        res.json({
                            "status": "failure",
                            "message": "Error while logging in, Please try again later",
                            "errorcode": 500
                        });
                    }
                }catch(e) {
                    console.trace(e);
                    res.json({
                        "status": "failure",
                        "message": "Error while logging in, Please try again later",
                        "errorcode": 500
                    });
                }
            }

            /*API Call*/
            console.log('other login process-----------');
            var password = body.password;
            var chalkLoginURL = {
                url: 'http://54.225.122.8:'+port+'/bh/login/v1',
                method:'post',
                json: {"username" : agentId,"password" : password,"appname":appName},
                headers: {'Content-Type': 'application/json'}
            };
            console.log("Chalk Login Url",chalkLoginURL);

            request(chalkLoginURL, callback);
        },

        logout: function(req,res)        {
            req.user.auth_token = null;
            req.user.save(function(err,user){
                if (err){
                    res.send(500, {'message': err});
                }
                res.json({ message: 'See you!'});
            });
        },
        refresh: function (req, res) {
            console.log("Here in refresh", req.body);
            var request = require('request');
            var refreshData = {
                url: 'http://54.225.122.8:'+port+'/bh/refreshtoken/v1',
                method: 'post',
                json: {refreshToken: req.body.refreshToken},
                headers: {'Content-Type': 'application/json'}
            };
            console.log("Refresh Request Data ", refreshData);
            function callback(error, response, body) {
                if(!error && response.statusCode === 200) {
                    console.log("Got Refresh Response ::: ", body, response.body);
                    res.json({"status": "success", data: body});
                }
                else {
                    console.log("Got Refresh Error ::::", error);
                    res.send(419, {"status": "failure", "message": "Unauthorized"});
                }
            }
            request(refreshData, callback);

        }

    }
};



