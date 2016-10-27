
</div></div></div></body>
<footer id="footer">Copyright © 2016 Youtube - Queue</footer>
    <?php 
        $js = array(
            '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',
            '//apis.google.com/js/client.js?onload=onClientLoad',
            '//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js',
           '//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js',
          
            '//code.jquery.com/ui/1.11.4/jquery-ui.js',
            //plugin
            '/assets/material/dist/js/material.js',
            '/assets/material/dist/js/ripples.js',
            '/assets/js/jquery.youtube.player.js',
            '/assets/js/youtube_api.js',
            '/assets/js/jquery.googleSuggest.js',
            //internal
            '/assets/app/search.js'
        );
    ?>
    
    <?php foreach($js as $v) :?>
            <script src="<?=$v?>"></script>
    <?php endforeach; ?>

    
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-82764919-2', 'auto');
      ga('send', 'pageview');

    </script>
</html>