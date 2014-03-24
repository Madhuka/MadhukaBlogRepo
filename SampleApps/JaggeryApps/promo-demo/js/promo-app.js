PromoApp = new function () {
    this.mycard;
    this.mylocation;
    this.procard;

    this.cardlist = function () {
        if ($('#uid').val() == "") {
            alert("Please enter User ID")
        } else {
            PromoAppUtil.makeRequest("/promo-demo/cardserivce/", {
                UserID: $('#uid').val()
            }, function (html) {
                $("#d1").html("Found " + html.mycard.length + " cards for you.");
                console.log(html.mycard);
                PromoApp.mycard = html.mycard;
            });

        }

    }

    this.shopname = function () {
        if ($('#log').val() == "" || $('#lat').val() == "") {
            alert("Please Locations details.")
        } else {
            PromoAppUtil.makeRequest("/promo-demo/locationserivce/" + $('#log').val() + '/' + $('#lat').val() + "/", null, function (html) {
                var localShopname = html.data.shopname;
                console.log(localShopname == null);
                if (localShopname == null) {
                    localShopname = 'Unknow Shop';
                }
                $("#d2").html("You are at " + localShopname + ".");
                PromoApp.mylocation = localShopname;
                console.log(html);
            });

        }

    }

    this.promocards = function () {
        var ws;
        var url = 'ws://localhost:9763/promo-demo/api/ws-server.jag';
        start();

        function start() {
            ws = new WebSocket(url);
            ws.onopen = function () {
                //document.write("web Socket onopen. ");
            };
            //event handler for the message event in the case of text frames
            ws.onmessage = function (event) {
                var promoData = event.data;
                PromoApp.procard = event.data;
                $("#d3").html("Today Promotion on " + promoData + ".");
            };
            ws.onclose = function () {
                //document.write("web Socket onclose. ");
            };

        }

    }

    this.pickmyCard = function () {

        for (i = 0; i < PromoApp.mycard.length; i++) {
            if (PromoApp.mycard[i] == this.procard) {
                $("#d4").html("Please Used " + PromoApp.mycard[i] + " in " + PromoApp.mylocation);
                return;
            }
        }

        $("#d4").html("No Promotion today for your cards");

    }

}