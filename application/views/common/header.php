<!DOCTYPE html>
    <html>
    <head>
        <title>Youtube Queue</title>

        <meta name="description" content="Quickly Queue up videos from youtube | Watch videos while you continue to search. No account needed just queue and watch.">
        <meta http-equiv="content-type" content="text/html;charset=UTF-8">
        <!-- FACEBOOK META -->
        <meta property="og:url" content="http://youtube-queue.website/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Youtube Queue"/>
        <meta property="og:description" content="Quickly Queue up videos from youtube | Watch videos while you continue to search. No account needed just queue and watch."/>
        <meta property="og:image"  content="http://youtube-queue.website/assets/img/save.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/assets/img/favicon/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/img/favicon/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/img/favicon/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/img/favicon/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/img/favicon/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/img/favicon/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/img/favicon/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/img/favicon/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicon/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="/assets/img/favicon/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/img/favicon/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon/favicon-16x16.png">
        <link rel="manifest" href="/assets/img/favicon/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/assets/img/favicon/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">


        <link rel="author" href="https://plus.google.com/102949947416864210579"/>



        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700">
  		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/icon?family=Material+Icons">

  		<!-- Bootstrap -->
  		<link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  		<link rel="stylesheet" type="text/css" href="/assets/material/dist/css/bootstrap-material-design.css">
        <link rel="stylesheet" type="text/css" href="/assets/material/dist/css/ripples.min.css">
        <!-- <link type="text/css" rel="stylesheet" media="screen, projection" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/black-tie/jquery-ui.css" /> -->
      
        <link rel="stylesheet" type="text/css" href="/assets/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="/assets/css/youtube-player.css">
        
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css">

    </head>
    <body>
    <div class="navbar navbar-default">
        <div class="container-fluid">
            
            <div class="navbar-collapse collapse navbar-responsive-collapse">
                <ul class="nav navbar-nav">
                    <li class="<?php echo isset($home) ? $home : '';?>">
                        <a href="/">Home</a>
                    </li>
                    <li class="<?php echo isset($about) ? $about : '';?>">
                        <a href="/main/about">Best About Us</a>
                    </li>
                    <li class="<?php echo isset($contact) ? $contact : '';?>">
                        <a href="/main/contact">Contact Us</a>
                    </li>
                    
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  
                     <li class="">
                        <a href="/rss.xml"><i class="fa fa-rss"></i> RSS</a>
                    </li>
                </ul>
            </div>
           
        </div>
    </div>

    <div class="container">
        <div class="page-header" id="banner">
            <div class="row">
