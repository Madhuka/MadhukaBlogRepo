var pipe = require('pipe');
var pipeCommon=require('pipe-common');
var router = require('router');


pipe.plug(pipeCommon.queryParser());    //Support for query parameters
pipe.plug(pipeCommon.bodyParser);     //Support for body content
pipe.plug(router);
pipe.plug(pipeCommon.errHandler);


//Require the routes
require('/routes/location.js');

application.serve(function(req,res,session){
    pipe.resolve(req, res, session);
})


