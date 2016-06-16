var targetObj;
var titleSearch;
var videoIdTag;
var tester;
var urltube;

$(document).ready( function() {

    $("button").click(function(){
        var queryTerm = $("#keyword").val();
        // var url = "https://api.yelp.com/v2/search?oauth_consumer_key=J7vAHD6r4TPzvjnniyFoaw&location="+queryTerm+"&oauth_nonce=gobblygook&oauth_signature=HGflok_6as2SEngYah75j61nwbw&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1466094519984&oauth_token=u5PmZDSUDdZcj2wk7oW9yH_k1BO7c3fc&term=ramen&callback=?";
        var url = "https://api.yelp.com/v2/search"
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
        var parameters = {
            callback: 'cb',
            jsonpCallback: 'cb',
            oauth_consumer_key: 'J7vAHD6r4TPzvjnniyFoaw',
            oauth_nonce: generateNonce(16),
            oauth_signature: 'HGflok_6as2SEngYah75j61nwbw',
            oauth_signature_method: 'HMAC-SHA1',
            oauth_timestamp: n,
            oauth_token: 'u5PmZDSUDdZcj2wk7oW9yH_k1BO7c3fc',
            oauth_version : '1.0'
    };
        $.ajax({
            type: "GET",
            url: url,
            cache: true,
            data: parameters,
            dataType: "json"
        }).done(function(response) {
            console.log(response);

        }).fail(function(response) {
            console.log("FAIL."+response)
        })
    });



});
