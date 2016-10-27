<?php include(APPPATH.'/views/common/header.php');?>

<div class="col-sm-6">
    <h1>Queue Youtube Video</h1>
    
    <div class="form-group label-floating is-empty">
        <label class="control-label">Search any youtube video</label>

        <input class="form-control" type="text" id="searchtext">
        <button class="btn btn-raised btn-danger btn-lg btn-block" id="searchbutton">
            Search Videos
        </button>
        
    </div>

    <div class="pull-left" id="count-video-holder">
        <span id="count"></span>
    </div>
    
    <div class="pull-right">
        <button class="btn btn-raised btn-danger" id="prevPageButton" disabled="disabled">
            <i class="fa fa-arrow-left"></i>
        </button>
        <button class="btn btn-raised btn-danger" id="nextPageButton" disabled="disabled">
            <i class="fa fa-arrow-right"></i>
        </button>
    </div>

    <div class="clearfix"></div>
   
    <div id="snipp">
    </div>
</div>

<div class="col-sm-6">
    <div id="player"></div>
    <div>
        <h4>Search Videos from youtube, then click the "Add To Queue" button</h4>
        <h3>Play Queue</h3>
        <button class="btn btn-raised btn-danger" id="repeat-all-song"><i class="fa fa-repeat"></i></button>
        <button class="btn btn-raised btn-danger" id="random-all-song"><i class="fa fa-random"></i></button>
        <div class="list-group" id="list-player">
            <h5>Empty Video List.</h5>
        </div>
    </div>
</div>
    
        
<?php include(APPPATH.'/views/common/footer.php');?>
        
    