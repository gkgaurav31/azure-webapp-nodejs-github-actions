const port = process.env.PORT || 1337;
require('http').createServer(function (req, resp) {
  var html = [
      '<!DOCTYPE html>',
      '<html>',
          '<head>',
              '<meta charset="utf-8" />',
              '<title>Azure GitHub</title>',
          '</head>',
          //'<body style="background-color:#4078c0;padding-top:100px; ">',
          '<body style="background:linear-gradient(-135deg, #E4A972, #9941D8); height: 1000px; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-repeat:no-repeat; padding-top:100px; ">',
          '<center><img style="height:100px" src="https://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png">', 
              '<h1 style="font-size:60px;color:black;font-family: Sans-serif, Times, serif;">Microsoft × GitHub = ∞</h1></center>',
          '</body>',
      '</html>'
  ].join('');

  resp.writeHead(200, {
      'Content-Length': Buffer.byteLength(html, 'utf8'),
      'Content-Type': 'text/html; charset=utf-8'
  });
  resp.write(html, 'utf8');
  resp.end();
}).listen(port);

console.log("Server running at http://localhost:%d", port);
