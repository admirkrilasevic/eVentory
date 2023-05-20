<?php
Flight::route('GET /api/items', function () {
    Flight::json(Flight::itemService()->get_all());
});

Flight::route('GET /api/items/@id', function ($id) {
    Flight::json(Flight::itemService()->get_by_id($id));
});

Flight::route('POST /api/items', function () {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::itemService()->add($data));
});

Flight::route('PUT /api/items/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::itemService()->update($id, $data);
    Flight::json(Flight::itemService()->get_by_id($id));
});

Flight::route('DELETE /api/items/@id', function ($id) {
    Flight::itemService()->delete($id);
});

?>