var targetObj;
var titleSearch;
var videoIdTag;
var tester;
var urltube;

$(document).ready( function() {

    $("button").click(function(){
        var queryTerm = $("#keyword").val();
        // var url = "https://api.yelp.com/v2/search?oauth_consumer_key=J7vAHD6r4TPzvjnniyFoaw&location="+queryTerm+"&oauth_nonce=gobblygook&oauth_signature=HGflok_6as2SEngYah75j61nwbw&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1466094519984&oauth_token=u5PmZDSUDdZcj2wk7oW9yH_k1BO7c3fc&term=ramen&callback=?";

        var url = "https://api.yelp.com/v2/search?location="+queryTerm+"term=ramen";
        var d = new Date();
        var n = d.getTime();
        var generateNonce = function(length) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for(var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        }
        // var parameters = {
        //     oauth_consumer_key: 'J7vAHD6r4TPzvjnniyFoaw',
        //     oauth_nonce: generateNonce(16),
        //     oauth_signature: 'qYdQ4oHcn9LNc826OafZ63iUH9M&HGflok_6as2SEngYah75j61nwbw',
        //     oauth_signature_method: 'HMAC-SHA1',
        //     oauth_timestamp: n,
        //     oauth_token: 'u5PmZDSUDdZcj2wk7oW9yH_k1BO7c3fc',
        //     oauth_version : '1.0',
        // };
        var oauth = OAuth({
            consumer: {
                public: 'J7vAHD6r4TPzvjnniyFoaw',
                secret: 'qYdQ4oHcn9LNc826OafZ63iUH9M'
            },
            signature_method: 'HMAC-SHA1'
        });
        var request_data = {
            url: 'https://api.yelp.com/v2/search?',
            method: 'GET',
            data: {
                location: queryTerm
            }
        };
        var token = {
            public: 'u5PmZDSUDdZcj2wk7oW9yH_k1BO7c3fc',
            secret: 'HGflok_6as2SEngYah75j61nwbw'
        };
        $.ajax({
            url: request_data.url,
            type: request_data.method,
            data: oauth.authorize(request_data, token),
            dataType: 'jsonp'
        }).done(function(data) {
            console.log(data)
        }).fail(function(data) {
            console.log("FAIL "+data)
        });
        // oauth.authorize(request, token);
        // $.ajax({
        //     type: "GET",
        //     url: url,
        //     cache: true,
        //     // data: parameters,
        //     dataType: "jsonp",
        // }).done(function(response) {
        //     console.log(response);
        //
        // }).fail(function(response) {
        //     console.log("FAIL."+response)
        // })
    });



});
