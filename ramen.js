
var queryTerm;
var request_data;
var token;
var oauth;
var token;
var oauth_data;

$(document).ready( function() {

    $("button").click(function(){
        var queryTerm = parseInt($("#keyword").val());
        // var url = "https://api.yelp.com/v2/search?oauth_consumer_key=J7vAHD6r4TPzvjnniyFoaw&location="+queryTerm+"&oauth_nonce=gobblygook&oauth_signature=HGflok_6as2SEngYah75j61nwbw&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1466094519984&oauth_token=u5PmZDSUDdZcj2wk7oW9yH_k1BO7c3fc&term=ramen&callback=?";

        var url = "https://api.yelp.com/v2/search?location="+queryTerm+"&term=ramen";
        var getStamp = function () {
            var d = new Date();
            return d.getTime();
        }
        var generateNonce = function(length) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for(var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        }
        var oauth = new OAuth({
            consumer: {
                public: 'J7vAHD6r4TPzvjnniyFoaw',
                secret: 'qYdQ4oHcn9LNc826OafZ63iUH9M'
            },
            signature_method: 'HMAC-SHA1'
        });
        var request_data = {
            url: 'https://api.yelp.com/v2/search?',
            method: 'POST',
            data: {
                location: queryTerm,
                term: "ramen"
            }
        };
        var token = {
            public: 'u5PmZDSUDdZcj2wk7oW9yH_k1BO7c3fc',
            secret: 'HGflok_6as2SEngYah75j61nwbw'
        };

        var oauth_data = {
        oauth_consumer_key: oauth.consumer.public,
        oauth_nonce: generateNonce(),
        oauth_signature: oauth.getSignature(request_data, token.secret, oauth_data),
        oauth_signature_method: oauth.signature_method,
        oauth_timestamp: getStamp(),
        oauth_version: '1.0',
        oauth_token: token.public
        };

        $.ajax({
            url: oauth.authorize(request_data, token),
            type: request_data.method,
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
