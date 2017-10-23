<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#" >

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
<script src="http://j.maxmind.com/js/country.js" charset="ISO-8859-1" type="text/javascript"></script>
<script src="http://j.maxmind.com/js/geoip.js" charset="ISO-8859-1" type="text/javascript" ></script>
</head>
	<!-- init() for CreateJS -->
  <body  onload="init();">
    <div id="fb-root"></div>
    <script>               
	/* error graph v2.0
      window.fbAsyncInit = function() {
        FB.init({
          appId: '126663087416513', 
		  channelUrl : 'http://localhost/shirt/channel.php',
          cookie: true, 
		  status: true,
          xfbml: true,
          oauth: true
        });

		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
				// start app here
				document.getElementById("trace1").innerHTML += response.authResponse.accessToken;
				FB.api('/me/permissions',function(response) {
					//JSON.stringify(response);
					var temp = "";
					if(response.data[0].email != 1){temp += "email,";}
					if(response.data[0].user_likes != 1){temp += "user_likes,";}
					if(response.data[0].publish_stream != 1){temp += "publish_stream,";}
					if(response.data[0].user_photos != 1){temp += "user_photos,";}
					if(response.data[0].read_friendlists != 1){temp += "read_friendlists,";}
					if(temp != ""){login(temp);}
				});
			} else if (response.status === 'not_authorized') {
				// not_authorized
				login('email,user_likes,publish_stream,user_photos,read_friendlists');
			} else {
				// not_logged_in
				login('email,user_likes,publish_stream,user_photos,read_friendlists');
			}
		});

      };// Load the SDK Asynchronously
      
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));

	function login(permit) {
		FB.login(function(response) {
			if (response.authResponse) {
				// connected
				alert('token = ' + response.authResponse.accessToken);
			} else {
				// cancelled
			}
		},{scope: permit});
	}

	function posting(){ // manual post
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
	
	function t2 (){ // auto feed
		var body = 'Reading JS SDK documentation';
		FB.api('/me/feed', 'post', { message: body }, function(response) {
			if (!response || response.error) {
				alert('Error occured');
			} else {
				alert('Post ID: ' + response.id);
			}
		});
	}

	function t3(){ // test ss post
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
	function myname(){
		FB.api('/me', function(response) {
			alert('Your name is ' + response.name);
		});
	}
	error graph 2.0*/
    </script>
	<center>
	<a href = 'javascript:posting();'>post wall</a> | <a href = 'javascript:t3();'>auto picpost</a> |  <a href = 'javascript:myname();'>Check me!!</a>
	<br>
	<canvas id="canvas" width="760" height="500" style="background-color:#ffffff"></canvas>
	<br>
	<div id="trace1"></div>
	
<?php/*

$ip=$_SERVER['REMOTE_ADDR'];
$hostname = gethostbyaddr($ip);
echo $hostname;

function ip2int($ip) {
   if(preg_match('/^\\D*(\\d+)\\D(\\d+)\\D(\\d+)\\D(\\d+)\\D*$/', $ip, $array)) {
     return (16777216 * $array[1] + 65536 * $array[2] + 256 * $array[3] + 1 * $array[4]);
   } else {
     return (0);
   }
}
echo "<br/>".ip2int($ip)."<br/>";*/
?> 
<script language="javascript">
document.getElementById("trace1").innerHTML += geoip_city();
</script>
</center>
</body>
</html>
