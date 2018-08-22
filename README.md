# Autocomplete
A javascript plugin for autocompletion using AJAX

## How to use it

Your html page :

```html
<html>
  <head>
    <!-- Vendors -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
          crossorigin="anonymous">
    <link rel="stylesheet" 
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
          type="text/css">

    <!-- Autocomplete CSS -->
    <link href="autocomplete.min.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <input type="hidden" name="__YOUR_FIELD_NAME__" class="-js-autocomplete" data-source="__YOUR_ENDPOINT_URL__" data-name="" id="__YOUR_FIELD_ID__">
  
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
    <script src="autocomplete.min.js"></script>
    <script>
      // Initialize autocomplete
      $('.-js-autocomplete').autocomplete();
    </script>
  </body>
</html>
```
