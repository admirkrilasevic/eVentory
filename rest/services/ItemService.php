<?php
require_once 'BaseService.php';
require_once __DIR__ . "/../dao/ItemDao.class.php";

class ItemService extends BaseService
{
    public function __construct()
    {
        parent::__construct(new ItemDao);
    }

}
?>