<?php
require 'config.php';
require 'php-sdk/src/facebook.php';

$facebook = new Facebook(array(
  'appId'  => $appID,
  'secret' => $secret,
  'cookie' => true,
));

// See if there is a user from a cookie
$user = $facebook->getUser();
$facebook->setFileUploadSupport(true);   

if ($user) {
  try {
    // Proceed knowing you have a logged in user who's authenticated.
    $me = $facebook->api('/me');
	//$loginUrl = $facebook->getLoginUrl( array('req_perms' => 'email,user_photos,publish_stream,read_friendlists'));
	$access_token = $facebook->getAccessToken();
  } catch (FacebookApiException $e) {
    echo '<pre>'.htmlspecialchars(print_r($e, true)).'</pre>';
    $user = null;
  }
}

?>
<!DOCTYPE html>
<html xmlns:fb="http://www.facebook.com/2008/fbml">

<head>
<meta charset="UTF-8">
<title>Shirt</title>
 <style>
      body {
        font-family: 'Lucida Grande', Verdana, Arial, sans-serif;
		margin: 0px 0px 0px 0px;
      }
</style>
<script src="libs/easeljs-0.4.2.min.js"></script>
<script src="libs/tweenjs-0.2.0.min.js"></script>
<script src="libs/ColorFilter.js"></script>
<script src="libs/movieclip-0.4.1.min.js"></script>
<script src="libs/preloadjs-0.1.0.min.js"></script>
<script src="libs/soundjs-0.2.0.min.js"></script>
<script src="libs/minified/TweenLite.min.js"></script>
<script src="shirt.js"></script>
<script src="index.js"></script>

</head>

  <body  onload="init();">
    <?php if ($me) { ?>
	<!-------------------------------------------------------------------->

    <div id="fb-root"></div>
    <script>               
      window.fbAsyncInit = function() {
        FB.init({
          appId: '<?php echo $facebook->getAppID() ?>', 
		  channelUrl : '<?php echo $channelURL ?>',
          cookie: true, 
          xfbml: true,
          oauth: true
        });

      };
      // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));

	function posting(){
	  FB.ui(
		{
		method: 'feed',
		name: 'Facebook Dialogs',
		link: 'http://developers.facebook.com/docs/reference/dialogs/',
		picture: 'http://fbrell.com/f8.jpg',
		caption: 'Reference Documentation',
		description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
		},
		function(response) {
			if (response && response.post_id) {
				 alert('Post was published.');
			} else {
				alert('Post was not published.');
			}
		});
	}
	
	function t2 (){
		var body = 'Reading JS SDK documentation';
		FB.api('/me/feed', 'post', { message: body }, function(response) {
			if (!response || response.error) {
				alert('Error occured');
			} else {
				alert('Post ID: ' + response.id);
			}
		});
	}

	function t3(){
		var params = {}; 
		params['message'] = 'PicRolled'; 
		//params['source'] = '@'+'<?php echo realpath("images/rf.jpg");?>';
		params['url'] = 'http://farm4.staticflickr.com/3332/3451193407_b7f047f4b4_o.jpg';
	
		FB.api('/me/photos', 'post', params, function(response) {
			if (!response || response.error) {
				alert('Error occured'+response.error.message);
			} else {
				alert('Post ID: ' + response.id);
			}
		});

	}
	
    </script>
	<center>
	<a href = 'javascript:posting();'>post wall</a> | <a href = 'javascript:t3();'>auto picpost</a>
	<br>
	<canvas id="canvas" width="760" height="500" style="background-color:#ffffff"></canvas>
	</center>
<!------------------------------------------------------------->
    <?php } else { ?>
      <script>
			//window.top.location.href = "<?=$loginUrl;?>";
			window.top.location.href = "https://graph.facebook.com/oauth/authorize?client_id=<?php echo $facebook->getAppId(); ?>&redirect_uri=http://apps.facebook.com/<?echo $appName;?>/&scope=email,user_photos,publish_stream,read_friendlists";
		</script>
    <?php } ?>


  </body>
</html>
