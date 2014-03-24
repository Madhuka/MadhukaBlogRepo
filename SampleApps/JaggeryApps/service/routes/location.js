var router = require('router');

//for HTTP GET
router.app.get('/api/location/:longitude/:latitude', function (req, res, session) {
    var log = new Log('location-service');
    var longitude = req.params.longitude;
    var latitude = req.params.latitude;
    log.info('longitude: ' + longitude);
    log.info('latitude: ' + latitude);
    // getting shop name on location
    var shopname = application.get(longitude + ',' + latitude);
    res.render({
        longitude: longitude,
        latitude: latitude,
        'shopname': shopname
    });
});

//for HTTP POST
router.app.post('/api/location/:longitude/:latitude/:shopname', function (req, res, session) {
    var longitude = req.params.longitude;
    var latitude = req.params.latitude;
    var shopname = req.params.shopname;
    //adding new shop
    application.put(longitude + ',' + latitude, shopname);
    res.render({
        msg: 'longitude:' + longitude + ', latitude: ' + latitude + ' created.'
    });
});

//for HTTP DELET
router.app.delete('/api/location/:longitude/:latitude', function (req, res, session) {
    var longitude = req.params.longitude;
    var latitude = req.params.latitude;
    //remove shop on longitude and longitude forcely
    application.remove(longitude + ',' + latitude);
    res.render({
        msg: 'longitude:' + longitude + ', latitude: ' + latitude + ' deleted.'
    });
});

//for HTTP PUT
router.app.put('/api/location/:longitude/:latitude/:shopname', function (req, res, session) {
    var longitude = req.params.longitude;
    var latitude = req.params.latitude;
    var shopname = req.params.shopname;
    //updating shop on longitude and longitude
    var tempshopname = application.get(longitude + ',' + latitude);
    if (tempshopname != null) {
        application.remove(longitude + ',' + latitude);
        application.put(longitude + ',' + latitude, shopname);
        res.render({
            msg: 'longitude:' + longitude + ', latitude: ' + latitude + ' updated.'
        });
    } else {
        res.render({
            msg: 'longitude:' + longitude + ', latitude: ' + latitude + ' not exisiting to update.'
        });
    }
});