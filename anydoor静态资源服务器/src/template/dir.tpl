<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>{{title}}</title>
  <link rel="stylesheet" href="">
  <style>
    body{
      margin: 30px;
    }

    a{
      display: block;
      font-size: 30px;
    }
  </style>
</head>
<body>
  {{#each files}}
  <a href="{{../dir}}/{{file}}">【{{icon}}】{{file}}</a>
  {{/each}}
</body>
</html>
