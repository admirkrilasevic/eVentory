<?php
require __DIR__ . '/../vendor/autoload.php';

// import and register all business logic files (services) to FlightPHP 
require_once __DIR__ . '/services/UserService.php';
require_once __DIR__ . '/services/ItemService.php';

Flight::register('userService', "UserService");
Flight::register('itemService', "ItemService");

// import all routes
require_once __DIR__ . '/routes/middleware.php';
require_once __DIR__ . '/routes/UserRoutes.php';
require_once __DIR__ . '/routes/ItemRoutes.php';

// it is still possible to add custom routes after the imports
Flight::route('GET /', function () {
    echo "Hello";
});

/* REST API documentation endpoint */
Flight::route('GET /docs.json', function(){
    $openapi = \OpenApi\scan('routes');
    header('Content-Type: application/json');
    echo $openapi->toJson();
});

Flight::map('header', function($name){
    $headers = getallheaders();
    return @$headers[$name];
});

Flight::start();
?>