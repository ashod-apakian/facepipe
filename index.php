<?php
error_reporting(0);
if(1) { $vvv=round(microtime(true)*1000); $vvv=$vvv%10000; $vvv=abs($vvv); $vvv=$vvv+10000; } else { $vvv=100; }
$req=$_SERVER['REQUEST_URI'];
if(empty($_SERVER['HTTPS'])||$_SERVER['HTTPS']==="off") { header('HTTP/1.1 301 Moved Permanently'); header('Location: '.'https://'.$_SERVER['HTTP_HOST'].$req); die(); }
function echoScript ($sf)                               { echo "<script type='text/javascript' src='".$sf."'></script>\n"; }
?>
<!doctype html>
<html lang='en'>
<head>
<meta charset="UTF-8">
<title>XDosh-150_GEN</title>
<?php echo "<link rel='manifest' href='./manifest.json?".$vvv."' >"; ?>
<meta     name='google'                 content='notranslate' />
<meta     name="viewport"               content="width=device-width, initial-scale=1,viewport-fit=cover" />
<meta property='og:title'               content="XDosh">
<meta property='og:description'         content='XDosh'>
<meta property='og:image'               content='./gfx/ylogo200.png'>
<meta property='og:site_name'           content='XDosh'>
<meta property='og:type'                content='website'>
<meta     name='description'            content='XDosh - Video Call'>
<meta     name='mobile-web-app-capable'                content='yes'>
<meta     name='apple-mobile-web-app-capable'          content='yes'>
<meta     name='apple-mobile-web-app-status-bar-style' content='black-translucent'>
<link rel="shortcut icon"                    href="./gfx/favicon.ico">
<link rel='icon' type='image/ico'            href='./gfx/favicon.ico'>
<link rel='apple-touch-icon'                 href='./gfx/ylogo152.png'>
<link rel='apple-touch-icon' sizes='76x76'   href='./gfx/ylogo76.png'>
<link rel='apple-touch-icon' sizes='120x120' href='./gfx/ylogo120.png'>
<link rel='apple-touch-icon' sizes='152x152' href='./gfx/ylogo152.png'>
<meta     name="msapplication-TileColor" content="#ffffff">
<meta     name="msapplication-TileImage" content="./gfx/ylogo144.png">
<meta     name="theme-color"             content="#ffffff">
<meta     name="application-name"        content="Headlines">
<meta http-equiv='cache-control'         content='no-cache, must-revalidate, post-check=0, pre-check=0' >
<meta http-equiv='cache-control'         content='max-age=0'>
<meta http-equiv='expires'               content='0'>
<meta http-equiv='expires'               content='Tue, 01 Jan 1980 1:00:00 GMT'>
<meta http-equiv='pragma'                content='no-cache'>
<style type="text/css">
*      { margin:0; padding:0; border:none;  background:none; overflow:hidden; outline:0; top:0px; left:0px; width:100%;  height:100%;  }
html   { position:fixed; background:#ffffff; -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;  }
body   { position:fixed;                     -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;  }
:root  { --sat: env(safe-area-inset-top); --sar: env(safe-area-inset-right); --sab: env(safe-area-inset-bottom); --sal: env(safe-area-inset-left); }
</style>
<?php
echoScript("./HackTimer.js?".$vvv);
?>
<?php echoScript("./NoSleep.js?".$vvv); ?>
<?php echoScript("https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js"); ?>
<!-- <script src="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/vision_bundle.js" type="module" crossorigin="anonymous"></script> -->
</head>
<body id="bodid"></body>
<?php
$bat=$_GET['batch'];
while(1)
 {
 if($bat==1)
  {
  echoScript("./aajs.js?".$vvv);
  echoScript("./srcea.js?".$vvv);
  echoScript("./srceb.js?".$vvv);
  echoScript("./srcec.js?".$vvv);
  echoScript("./srced.js?".$vvv);
  echoScript("./srcee.js?".$vvv);
  break;
  }
 if($bat==2)
  {
  echoScript("./aajs.js?".$vvv);
  echoScript("./srcc.js?".$vvv);
  break;
  }
 if($bat==3)
  {
  echoScript("./aajs.js?".$vvv);
  echoScript("./sourcea.js?".$vvv);
  break;
  }
 if($bat==4)
  {
  echoScript("./aajs.js?".$vvv);
  echoScript("./scripta.js?".$vvv);
  break;
  }
 /*
 echoScript("./aajs.js?".$vvv);
 echoScript("./appsrc_data.js?".$vvv);
 echoScript("./appsrc_app.js?".$vvv);
 echoScript("./appsrc_guix.js?".$vvv);
 echoScript("./appsrc_net.js?".$vvv);
 echoScript("./appsrc_mpipe.js?".$vvv);
 echoScript("./appsrc_media.js?".$vvv);
 echoScript("./appsrc_speech.js?".$vvv);
 echoScript("./appsrc_vlog.js?".$vvv);
 */
 echoScript("./aajs.js?".$vvv);
 echoScript("./aaapp.js?".$vvv);//appsrc_data.js?".$vvv);
 echoScript("./aaetc.js?".$vvv);//appsrc_data.js?".$vvv);
 echoScript("./aatoo.js?".$vvv);//appsrc_data.js?".$vvv);
 echoScript("./aaside.js?".$vvv);//appsrc_data.js?".$vvv);
 break;
 }

?>

</html>
