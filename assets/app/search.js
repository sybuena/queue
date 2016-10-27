var nextPageToken = 0;
var prevPageToken = 0;
var firstPage = true;


$(document).ready(function() {

    $.material.init();

    searchNow();
    //global
    window.videList = new Array();
    //we check if url is http or https
    var secure = (window.location.href.indexOf('https') == 0 ) ? 'https' : 'http';    
    var url = secure+'://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1';
    //AUTO COMPLETE
    $('#searchtext').autocomplete({
        source: function(request, response) {
            var sqValue = [];
            jQuery.ajax({
                type    : 'POST',
                url     : url,
                dataType : 'jsonp',
                data: jQuery.extend({
                    q: request.term
                }, {  }),
                success: function(data){
                    obj = data[1];
                    jQuery.each( obj, function( key, value ) {
                        sqValue.push(value[0]);
                    });
                    response( sqValue);
                }
            });
        },
        //select
        select: function(e, ui) {
            //start the search 
            searchNow();
        }
    });
    //on enter then start search
    $('#searchtext').keypress(function (e) {
        if (e.which == 13) {
            searchNow();
            return false;  
        }
    });
    //on click search button
    $('#searchbutton').click(function() {
        searchNow();
    });

    $('#nextPageButton').click(function() {
        //first load mose popular videos
        
        searchYouTubeApi(nextPageToken);
    });
    
    $('#prevPageButton').click(function() {
        searchYouTubeApi(prevPageToken);
    });

    //enable repeat playlist
    $('#repeat-all-song').click(function() {
        var status = $('#repeat-all-song').attr('is-repeat');
        if(status == 'true') {
            $('#repeat-all-song').removeClass('btn-clicked').attr('is-repeat', 'false');
        } else {
            action = 'true';
            $('#repeat-all-song').addClass('btn-clicked').attr('is-repeat', 'true');
        }
    });

    //enable shuffle playlist
    $('#random-all-song').click(function() {
        var status = $('#random-all-song').attr('is-random');
        if(status == 'true') {
            $('#random-all-song').removeClass('btn-clicked').attr('is-random', 'false');
        } else {
            action = 'true';
            $('#random-all-song').addClass('btn-clicked').attr('is-random', 'true');
        }
    });
});

/**
 * For searching from youtube api
 * 
 * @return this
 */
function searchNow() {
    
    $('#searchbutton').
        html('Searching...').
        attr('disabled', 'disabled');
    
    $('#prevPageButton').attr('disabled', 'disabled');
    $('#nextPageButton').attr('disabled', 'disabled');
    
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);

    return this;
}
 
/**
 * Load youtube api
 * 
 * @return this
 */
function onYouTubeApiLoad() {

    gapi.client.setApiKey('AIzaSyBFUfRnCyAt3rICVZyqEiYElJJdnZ7du3M');
    //start search   
    searchYouTubeApi();
}

/**
 * Search from youtube
 * 
 * @param string|null
 * @return this
 */
function searchYouTubeApi(PageToken) {
    var searchText= $('#searchtext').val();
  
    var request = gapi.client.youtube.search.list({
        part        : 'snippet',
        q           : searchText,
        type        : 'video',
        maxResults  : 5,
        pageToken   : PageToken
    });
        
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
   //  $('#response').append("<div id=\"page\"><button type=\"button\" id=\"nextPageButton\">Next Page return from request execute method is: "+nextPageToken+"</button></div>");
   return this;
}

/**
 * Process the search result from youtube
 * 
 * @param object
 * @return this
 */
function onSearchResponse(response) {
    //disable the search button
    $('#searchbutton').
        html('Search Videos').
        removeAttr('disabled');

    //empty out the list
    $('#snipp').html('');

    var responseString = JSON.stringify(response, '', 2);
    var resultCount = response.pageInfo.totalResults;
    //we need this for next and prev button    
    nextPageToken = response.nextPageToken;
    prevPageToken = response.prevPageToken;

    $('#count').html('Found '+resultCount+' Results');
    $('#prevPageButton').attr('disabled', 'disabled');
    $('#nextPageButton').attr('disabled', 'disabled');

    if(parseInt(resultCount) > 0) {
        if(typeof prevPageToken !== 'undefined') {
            $('#prevPageButton').removeAttr('disabled', 'disabled');
        }

        if(typeof nextPageToken !== 'undefined') {
            $('#nextPageButton').removeAttr('disabled', 'disabled');
        }
    }

    var ROW = 
    '<div class="row">'+
        '<div class="col-sm-6">'+
            '<img style="width: 285px;" src="[IMG]">'+
        '</div>'+
        '<div class="col-sm-6">'+
            '<div class="list-title">'+
                '<a href="http://www.youtube.com/watch?v=[ID]" target="_blank">'+
                    '<b>[TITLE]</b>'+
                '</a>'+
            '</div>'+
            '<div class="list-channel">'+
                '<a href="http://www.youtube.com/user/[CHANNEL]" target="_blank">'+
                    '<small>[CHANNEL]</small>'+
                '</a>'+
            '</div>'+
            '<div class="list-description">'+
                '[DESC]'+
            '</div>'+
        '</div>'+
        '<div class="col-sm-12">'+
            '<button class="btn btn-raised btn-danger btn-block add-video" id="[ID]" title="[TITLE]">'+
                'Add To Queue'+
            '</button>'+
        '</div>'+
    '</div><hr>';

    for(i in response.items) {
        //store each JSON value in a variable
        var publishedAt =response.items[i].snippet.publishedAt;
        var channelId = response.items[i].snippet.channelId;
        var title = response.items[i].snippet.title;
        var description = response.items[i].snippet.description;
        var thumbnails_default = response.items[i].snippet.thumbnails.default.url;
        var thumbnails_medium = response.items[i].snippet.thumbnails.medium.url;
        var thumbnails_high = response.items[i].snippet.thumbnails.high.url;
        var channelTitle = response.items[i].snippet.channelTitle;
        var liveBroadcastContent = response.items[i].snippet.liveBroadcastContent;
        var videoID =response.items[i].id.videoId;
        
        $('#snipp').append(ROW.
            replace('[ID]',         videoID).
            replace('[ID]',         videoID).
            replace('[CHANNEL]',    channelTitle).
            replace('[CHANNEL]',    channelTitle).
            replace('[DESC]',       description.substring(0, 110)+'...').
            replace('[IMG]',        thumbnails_medium).
            replace('[TITLE]',      title).
            replace('[TITLE]',      title)
        );  
    }

    // on click add vide to queue
    $('.add-video').unbind('click').bind('click', function() {
        
        var addToQueue = {
            'id'    : $(this).attr('id'),
            'title' : $(this).attr('title')
        };

        //push it to the list
        window.videList.push(addToQueue);
        //now append the list
        appendToList(addToQueue);
        //for removing from list
        removeToList();
    });

    return this;
}

function initPlayer(videoId) {
    
    window.player = new YT.Player('player', {
      height     : '340',
      width      : '540',
      videoId    : videoId['id'],
      events     : {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });

    // autoplay video
    function onPlayerReady(event) {
       // event.target.playVideo();
    }

    // when video ends
    function onPlayerStateChange(event) {        
        if(event.data === 0) { 

            nextSong(1);
        }
    }
}

/**
 * Remove from the video list
 * 
 * @return this
 */
function removeToList() {

    $('.remove-from-list').unbind('click').bind('click', function() {
        var videoId = $(this).parent().attr('player-id');

        removeForce(videoId);
        
        $(this).parent().remove();

        //if last from the list then remove player
        if(window.videList.length == 0) {
            //remove the video player
            window.player.destroy();
        } else {

            //for UI
            if($(this).parent().hasClass('active')) {
                nextSong(0);
            }
        }

        return false
    });

    return this;
}

/**
 * Cue or play the next song from the list
 * 
 * @param bool
 * @return this
 */
function nextSong(forcePlay) {

    //only if we still have songs in the list
    if(window.videList.length > 0) {
        
        //IF SHUFFLE SONG
        if($('#random-all-song').attr('is-random') == 'true') {
            var nextSong =  randomSong();
            
            window.player.cueVideoById(nextSong);
        
            if(forcePlay) {
                window.player.playVideo();
            }

            $('#list-player a.active').find('i[class="fa fa-play"]').remove();
            $('#list-player a.active').removeClass('active')
            $('[player-id="'+nextSong+'"]').addClass('active').prepend('<i class="fa fa-play"></i>  ');

        //else regular song only
        } else {

            $('#list-player a.active').find('i[class="fa fa-play"]').remove();
            $('#list-player a.active').removeClass('active').next().addClass('active').prepend('<i class="fa fa-play"></i>  ');

            var nextSong = $('#list-player a.active').attr('player-id');

            //only if no last song
            if(typeof nextSong !== 'undefined') {

                window.player.cueVideoById(nextSong);
        
                if(forcePlay) {
                    window.player.playVideo();
                }
            //if in the last song
            } else {
                //IF REPEAT IS ENABLE
                if($('#repeat-all-song').attr('is-repeat') == 'true') {
                    //start from the top of the list again
                    var nextSong = $('#list-player a:first').attr('player-id');
                    window.player.cueVideoById(nextSong);
        
                    if(forcePlay) {
                        window.player.playVideo();
                    }
                    $('#list-player a:first').addClass('active').prepend('<i class="fa fa-play"></i>  ');
                }
            }
        }

    }

    return this;
}

window.uniqueRandoms = [];

function randomSong() {
    //build array list
    var list = new Array();
    
    $('#list-player a').each(function() {
        list.push($(this).attr('player-id'))
    });
        
    if (!window.uniqueRandoms.length) {
        for (var i = 0; i < list.length; i++) {
            window.uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * window.uniqueRandoms.length);
    var val = window.uniqueRandoms[index];

    // now remove that value from the array
    window.uniqueRandoms.splice(index, 1);

    return list[val]
}
/**
 * Remove songs from the array list
 * 
 * @param string
 * @return this
 */
function removeForce(videoId) {
    var newList = new Array();

    for(i in window.videList) {
        if(window.videList[i]['id'] != videoId) {
            newList.push(window.videList[i]);
        }
    }
    
    window.videList = newList;

    return this;
}

/**
 * Apppend the video to the queue
 * 
 * @param string
 * @return this
 */
function appendToList(addToQueue) {
    //if first add of video
    if(window.videList.length == 1) {
        $('#list-player').html('');
        //start the player
        initPlayer(window.videList[0]);

        var HTML_ROW = 
        '<a href="#" class="list-group-item active" player-id="[VIDEO_ID]" title="[TITLE]">'+
            '<i class="fa fa-play"></i>  [TITLE]'+ 
            '<span class="pull-right remove-from-list">'+
                '<i class="fa fa-times"></i>'+
            '</span>'+
        '</a>';

        $('#list-player').append(HTML_ROW.
            replace('[TITLE]',    addToQueue['title']).
            replace('[TITLE]',    addToQueue['title']).
            replace('[VIDEO_ID]', addToQueue['id'])
        );

    } else {

        var HTML_ROW = 
        '<a href="#" class="list-group-item" player-id="[VIDEO_ID]" title="[TITLE]">'+
            '[TITLE]'+ 
            '<span class="pull-right remove-from-list">'+
                '<i class="fa fa-times"></i>'+
            '</span>'+
        '</a>';

        $('#list-player').append(HTML_ROW.
            replace('[TITLE]',      addToQueue['title']).
            replace('[TITLE]',      addToQueue['title']).
            replace('[VIDEO_ID]',   addToQueue['id'])
        );
    }

    //if click from the list, then we play it
    $('.list-group-item').click(function() {
        var playSong = $(this).attr('player-id');
            
        window.player.cueVideoById(playSong);
    
        if(1) {
            window.player.playVideo();
        }

        $('#list-player a.active').find('i[class="fa fa-play"]').remove();
        $('#list-player a.active').removeClass('active')
        $('[player-id="'+playSong+'"]').addClass('active').prepend('<i class="fa fa-play"></i>  ');
    });

    return this;
}



