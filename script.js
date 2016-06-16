// initial API call

var targetObj;
var titleSearch;
var videoIdTag;
var tester;
var urltube;

$(document).ready( function() {

    $("button").click(function(){
        var queryTerm = $("#keyword").val();
        var url = "https://www.omdbapi.com/?t="+queryTerm;
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json"
        }).done(function(response) {
            console.log(response);
            targetObj = response;
            titleSearch = response.Title+" in 5 seconds";
            titleSearch = encodeURIComponent(titleSearch);
            urltube = "https://www.googleapis.com/youtube/v3/search?q="+titleSearch+"&part=snippet&key=AIzaSyCLExwDoTktHGunzabmdMWLZEUSbYfcQ10";
        }).then(function(titleSearch) {
            $.ajax({
                url: urltube,
                type: "GET",
                dataType: "json"
            }).done(function(response2){
                tester=response2;
                videoIdTag = response2.items[0].id.videoId;
                console.log(response2);
            }).then(function(){
                $("#player").css("display", "block");
                var urltubeTwo = "https://www.youtube.com/embed/"+videoIdTag+"?enablejsapi=1&widgetid=1";
                player.a.src = urltubeTwo;

            }).fail(function(){
                console.log("You failed at step 2 "+response2);
            })
        }).fail(function(response) {
            console.log("FAIL."+response)
        })
    });



});
